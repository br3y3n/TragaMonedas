import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext.jsx";

import Loader from "./Loader.jsx";
import { register } from "../services/auth.services.js";

const FormRegister = () => {

  // campos del formulario
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nombre, setNombre] = useState(null);


  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async() => {
    setLoading(true);
    
      const credentials = {
          email,
          password,
          nombre
      }

      try {
      
        const response = await register(credentials);
        if (response.status == 400) return toast.error("El usuario ya existe.");

        navigate("/login");
        setLoading(false);


      } catch (error) {
          console.log(error);
          setLoading(false);
      }
      
  }


  return (
    <Card color="white" shadow={false} className="p-10 min-w-0">
      { loading && <Loader/> }
      <ToastContainer/>
      <Typography variant="h4" color="blue-gray">
        ¡Registro!
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        ¡Encantado de conocerlo! Ingresa tus datos para registrarte.
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu nombre
          </Typography>
          <Input
            size="lg"
            placeholder="carlitos lopez"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu correo
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contraseña
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Registrarse
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" className="font-medium text-gray-900">
            <Link to={"/login"}>Iniciar sesión</Link>
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default FormRegister;
