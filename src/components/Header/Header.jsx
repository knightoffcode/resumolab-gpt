import React from 'react';
import { useTheme } from '../../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { CiMenuFries  } from 'react-icons/ci';

/**
 * Header Component
 * 
 * This component represents the header of the application, including 
 * the title and buttons for toggling the theme and the sidebar menu.
 * It uses icons to indicate the current theme (light or dark) and 
 * allows users to open or close the sidebar menu.
 * 
 * @returns {JSX.Element} The JSX element representing the header.
 */

function Header() {

    const { darkTheme, toggleTheme } = useTheme();
    const { isMenuOpen, toggleMenu } = useTheme();

    return (
        <header className={`header`}>
            <div className="header__wrapper">
                <button className="header__button" onClick={toggleMenu}>
                    <CiMenuFries  />
                </button>
                <h1 className="header__name">&gt;-- Innovate Hub --&lt;</h1>
                <button className="header__button" onClick={toggleTheme} id="darkmode">
                    {darkTheme ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
