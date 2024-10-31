import React from 'react';
import { useTheme } from '../../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

/**
 *
 * @returns
 */

function Header() {

    const { darkTheme, toggleTheme } = useTheme();

    return (
        <header className={`main__header ${darkTheme ? 'main--dark' : 'main--light'}`}>
            <h1 className="main__title">Innovate Hub</h1>
            <button className="main__theme-toggle" onClick={toggleTheme}>
                {darkTheme ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
};

export default Header;
