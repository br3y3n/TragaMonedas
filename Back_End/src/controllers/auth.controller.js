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

        // const user = new UserModel(data);

        // const hasPassword = await bcrypt.hash();




        return res.status(201).json({
            message: "Registro exitoso",
            data: data,
        });


    } catch (error) {
        res.status(500).json({
            message: "error al crear el usuario",
            error: error.message,
        });
    }

}

