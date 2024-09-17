import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <GlobalContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen
        }}>
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
