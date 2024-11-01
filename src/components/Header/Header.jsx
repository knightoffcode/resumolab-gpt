import React from 'react';
import { useTheme } from '../../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { CiMenuFries  } from 'react-icons/ci';

/**
 *
 * @returns
 */

function Header() {

    const { darkTheme, toggleTheme } = useTheme();
    const { isMenuOpen, toggleMenu } = useTheme();

    return (
        // <header className={`header ${darkTheme ? 'main--dark' : 'main--light'}`}>
        <header className={`header`}>
            <div className="header__wrapper">
                <button className="header__button" onClick={toggleMenu}>
                    <CiMenuFries  />
                </button>
                <h1 className="header__name">&gt;-- Innovate Hub --&lt;</h1>
                <button className="header__button" onClick={toggleTheme}>
                    {darkTheme ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
