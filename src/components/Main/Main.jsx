import React, { useState, useCallback, useEffect } from 'react';
import OpenAI from "openai";
import { CiCircleRemove, CiPlane, CiCircleChevDown } from "react-icons/ci";
import { FaSpinner } from 'react-icons/fa';
import { CiPaperplane } from "react-icons/ci";

import { useTheme } from '../../ThemeContext';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

function Main() {
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]); // Armazena todas as mensagens
    const [loading, setLoading] = useState(false);
    const [displayedMessages, setDisplayedMessages] = useState([]); // Mensagens exibidas com animação

    const { isMenuOpen, toggleTheme } = useTheme();

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const fetchResponse = async (input) => {
        setLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: input }],
            });
            const botMessage = response.choices[0].message.content;

            // Adiciona a resposta do bot ao estado de mensagens
            setMessages(prevMessages => [
                ...prevMessages,
                { text: botMessage, from: 'bot' }
            ]);
            // Exibe a resposta do bot após um pequeno atraso
            displayMessages({ text: botMessage, from: 'bot' });
        } catch (error) {
            const errorMessage = error.response?.status === 429
                ? 'Limite de requisições excedido. Tente novamente mais tarde.'
                : 'Desculpe, houve um erro ao obter a resposta.';
            setMessages(prevMessages => [
                ...prevMessages,
                { text: errorMessage, from: 'bot' }
            ]);
            displayMessages({ text: errorMessage, from: 'bot' });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (!userMessage) return;

        // Adiciona a mensagem do usuário ao estado e à lista exibida
        const newUserMessage = { text: userMessage, from: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setDisplayedMessages(prev => [...prev, newUserMessage]); // Adiciona à lista exibida

        fetchResponse(userMessage); // Chama a API para a resposta do bot
        setUserMessage(''); // Limpa o campo de entrada
    };

    const displayMessages = useCallback((msg) => {
        setDisplayedMessages(prev => [...prev, msg]); // Exibe a nova mensagem com animação
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === '/') {
            e.preventDefault();
            document.querySelector('.chat__input').focus();
        }
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="main__content">
            <div className="main__wrapper">
                <aside className={`main__aside${isMenuOpen ? " active" : ""}`}>
                    <ul className="aside aside--main">
                        <li className="aside__item">
                            <a href="" className="aside__anchor">
                                <span className="aside__icon">⚙️</span>
                                Modo Startup
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
                <div className="main__chat">
                    <div className="chat">
                        <div className="chat__actions">
                            <button className="chat__action">
                                <CiCircleRemove />
                            </button>
                        </div>
                        <div className="chat__messages">
                            <div className="chat__messages__welcome">
                                <h3>Bem-vindo ao Inonovate Hub!</h3>
                                <p>Digite no campo abaixo para que tenha resultados incríveis. Aproveite.</p>
                                {
                                    !messages && (
                                        <div className="chat__messages__plane">
                                            <CiPlane />
                                        </div>
                                    )
                                }
                            </div>
                            {/* Renderiza as mensagens exibidas */}
                            {displayedMessages.map((msg, index) => (
                                <div key={index} className={`chat__message chat__message--${msg.from}`}>
                                    <p>
                                        {msg.text}

                                        <span> &gt;
                                    {
                                            msg.from === "user" ? "by Me" : "by We AI"
                                        }

                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                      
                        <div className="chat__entry">
                            <input
                                type="text"
                                className="chat__input"
                                placeholder="Digite sua mensagem."
                                value={userMessage}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                            />
                            <button className="chat__send" onClick={handleSubmit}>
                                {loading ? <FaSpinner className="rotate" /> : <CiPaperplane />}
                            </button>
                            <div className="chat__messages__back">
                            <CiCircleChevDown />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
