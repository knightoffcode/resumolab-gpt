import React from 'react';

import { useTheme } from '../../ThemeContext';

function Aside() {
    const { isMenuOpen, startupMode, toggleStartupMode } = useTheme();

    return (
        <aside className={`main__aside${isMenuOpen ? " active" : ""}`}>
            <ul className="aside aside--main">
                <li className="aside__item">
                    <a href="" className="aside__anchor" onClick={(e) => {
                            e.preventDefault();
                            toggleStartupMode();
                        }}>
                        <span className="aside__icon">⚙️</span>
                        {!startupMode ? "Ativar Modo Startup" : "Ativar Modo Normal"}
                    </a>
                </li>
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">⚙️</span>
                        Configurações
                    </a>
                </li>
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">🔔</span>
                        Notificações
                    </a>
                </li>
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">📊</span>
                        Relatórios
                    </a>
                </li>
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">🔒</span>
                        Segurança
                    </a>
                </li>
            </ul>
            <ul className="aside aside--secundary">
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">⚡</span>
                        Atalhos
                    </a>
                </li>
                <li className="aside__item aside__item--blocked">
                    <a href="" className="aside__anchor">
                        <span className="aside__icon">🛠️</span>
                        Ferramentas
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
