import { useState, useContext } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "./Loader.jsx";

import { login } from "../services/auth.services.js";

import { AuthContext } from "../context/AuthContext.jsx";
   
const  FormLogin = () => {

    // campos del formulario
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { setUser, setIsAuthenticated } = useContext(AuthContext)

    const handleLogin = async() => {
        setLoading(true);
        const credentials = {
            email,
            password
        }

        try {
            
            const response = await login(credentials);
            if (response.status == 404) return toast.error("El usuario no existe.")
            if (response.status == 400) return toast.error("Credenciales incorrectas.");

            setIsAuthenticated(true);
            setUser(response.data.data.user);

            navigate("/inicio");
            setLoading(false);



        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }


    return (
        <Card className="w-full max-w-[450px] flex p-7 " color="white" shadow={true}>
            <ToastContainer/>
            { loading && <Loader/> }
            <h1 className="font-semibold text-black text-3xl">¡Iniciar Sesión!</h1>
            <Typography color="gray" className="mt-1 font-normal">
                Te estabamos esperando.
            </Typography>
            <form
                className="mt-8 mb-2 max-w-screen-lg sm:w-96 w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Ingresa tu correo eléctronico
                </Typography>
                <Input
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="carloslopez@mail.com"
                    className=" !border-t-blue-gray-200 w-full transition-all focus:!border-t-gray-900"
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Contraseña
                </Typography>
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 transition-all focus:!border-t-gray-900"
                />
                </div>

                <Button type="submit" className="mt-6" fullWidth>Ingresar</Button>
                <div className="w-full flex justify-center items-center pt-5">
                    <p className="text-center">¿No tienes una cuenta? <Link className="font-semibold" to="/register">Registrame</Link></p>
                </div>
            </form>
        </Card>
    );
}

export default FormLogin;
