import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const register = async(req, res) => {

    const data = req.body;

    try {
        
        const foundUser = await UserModel.findOne({ email: data.email });

        if (foundUser) return res.status(400).json({
            message: "Usuario ya existe.",
        });

        const user = new UserModel(data);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);

        await user.save();

        return res.status(201).json({
            message: "Registro exitoso",
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            message: "error al crear el usuario",
            error: error.message,
        });
    }

}

export const login = async(req, res) => {

    const data = req.body;

    try {

        const foundUser = await UserModel.findOne({ email: data.email });
        if (!foundUser) return res.status(404).json({
            message: "Usuario no encontrado",
        });

        const comparePassword = await bcrypt.compare(data.password, foundUser.password);
        if (!comparePassword) return res.status(400).json({
            message: "Usuario o contraseña incorrectos.",
        });

        // generate token
        jwt.sign(
            { _id: foundUser._id },
            "hash secret",
            { expiresIn: "7hr" },
            (error, token) => {
                if (error) return res.status(403).json({
                    message: "No tienes permiso",
                    error: error.message,
                });

                res.cookie("token", token, {
                    secure: true,
                    httpOnly: false,
                    sameSites: "none"
                });

                return res.status(200).json({
                    message: "Sesion iniciada correctamente.",
                    data: { token, user: foundUser },
                });
            }
        );


    } catch (error) {
        return res.status(500).json({
            message: "error al iniciar sesion",
            error: error.message,
        });
    }
}

export const verifyToken = async(req, res) => {

    const { token } = req.cookies;

    try {

        if(!token) return res.status(403).json({
            message: "No tienes permiso",
        });

        jwt.verify(token, "hash secret", async(error, user) => {

            if(error) return res.status(400).json({
                message: error.message,
            });

            const foundUser = await UserModel.findById(user._id);

            if(!foundUser) return res.status(404).json({
                message: "Usuario no encontrado."
            });

            return res.status(200).json(foundUser);

        });

        
    } catch (error) {
        return res.status(500).json({
            message: "error al verificar el token",
            error: error.message,
        });
    }
}

export const logout = async(req, res) => {
    try {
        
        res.cookie("token", "", {
            expires: new Date(0)
        });

        return res.status(200).json({message: "Sesion cerrada exitosamente!"});

    } catch (error) {
        return res.status(500).json({
            message: "error al cerrar sesion.",
            error: error.message,
        });
    }
}
