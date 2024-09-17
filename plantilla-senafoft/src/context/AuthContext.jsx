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
            
            if (!cookies.token) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }

            try {

                const verifyTokenResponse = await verifyToken(cookies.token);
                if (!verifyTokenResponse) {
                    setUser(null);  
                    setIsAuthenticated(false);
                    return setLoading(false);
                }
                
                setUser(verifyTokenResponse.data);
                setIsAuthenticated(true);
                return setLoading(false);

                
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                return setLoading(false);
            }
        }

        checkLogin();

    }, []);


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading
        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
