import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const register = async(req, res) => {

    const data = req.body;

    try {
        
        const foundUser = await UserModel.findOne({ email: data.email });

        if (foundUser) return res.status(404).json({
            message: "Usuario no encontrado",
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
        console.log(error);
        return res.status(500).json({
            message: "error al crear el usuario",
            error: error.message,
        });
    }

}

