import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [idPartida, setIdPartida] = useState()
    return (
        <GlobalContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen,
            idPartida,
            setIdPartida
        }}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
