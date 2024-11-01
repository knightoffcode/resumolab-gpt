import React, { createContext, useContext, useState, useEffect } from 'react';
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

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        setIsMenuOpen(mediaQuery.matches);

        const handleResize = (event) => {
            setIsMenuOpen(event.matches);
        };

        mediaQuery.addListener(handleResize);

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme, isMenuOpen, toggleMenu, startupMode, toggleStartupMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
