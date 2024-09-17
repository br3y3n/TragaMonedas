import { useState, useEffect, createContext } from "react";
import Cookie from "js-cookie";

import { verifyToken } from "../services/auth.services.js";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    // check if the user is login
    useEffect(() => {
        
        const checkLogin = async() => {

            const cookies = Cookie.get();

            try {

                if (!cookies.token) {
                    setUser(null);
                    setIsAuthenticated(false);
                    setLoading(false);
                }


                
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }
        }

    }, []);



    return (
        <AuthContext.Provider value={{

        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
