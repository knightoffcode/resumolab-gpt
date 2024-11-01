import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [startupMode, setStartupMode] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevMenuState => !prevMenuState);
    };

    const toggleStartupMode = () => {
        setStartupMode(prevStartupModeState => !prevStartupModeState);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme, isMenuOpen, toggleMenu, startupMode, toggleStartupMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
