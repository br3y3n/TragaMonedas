import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import Users from "../pages/Users";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/usuarios" element={<Users/>} />
            <Route path="/estadisticas" element={<Charts/>} />
        </Routes>
    );
}

export default AllRoutes;
