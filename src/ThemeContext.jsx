import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevMenuState => !prevMenuState);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme, isMenuOpen, toggleMenu  }}>
            {children}
        </ThemeContext.Provider>
    );
};
