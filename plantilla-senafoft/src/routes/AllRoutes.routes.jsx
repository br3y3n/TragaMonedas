import { Routes, Route, redirect } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Inicio from "../pages/Inicio";

import PrivateRoutes from "./PrivateRoutes.routes";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicio" element={<Inicio/>} />
            </Route>

        </Routes>
    );
}

export default AllRoutes;
