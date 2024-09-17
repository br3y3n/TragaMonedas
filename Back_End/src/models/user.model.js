import mongoose from "mongoose";

const userSchema = await mongoose.Schema({
    nombre: {
        type:String,
        require:true,
        trim:true
    },
    email: {
        type:String,
        require:true,
        trim:true
    },
    password: {
        type:String,
        require:true
    }
});


export const UserModel = await mongoose.model("user", userSchema);
