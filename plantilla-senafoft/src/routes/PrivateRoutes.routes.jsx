import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import Loader from "../components/Loader.jsx";

import { AuthContext } from "../context/AuthContext.jsx";

const PrivateRoutes = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);


    if(loading) return <Loader/>
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>

    return <Outlet/>
}

export default PrivateRoutes;
