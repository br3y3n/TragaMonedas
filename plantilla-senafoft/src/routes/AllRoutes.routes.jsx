import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Inicio from "../pages/Inicio";

import PrivateRoutes from "./PrivateRoutes.routes";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route element={<PrivateRoutes/>}>
                {/* <Route path="/" element={<Home/>} />
                <Route path="/usuarios" element={<Users/>} />
                <Route path="/estadisticas" element={<Charts/>} /> */}
                <Route path="/inicio" element={<Inicio/>} />
            </Route>

        </Routes>
    );
}

export default AllRoutes;
