import React, { useState, useCallback, useEffect, useRef } from 'react';
import OpenAI from "openai";
import { CiCircleRemove, CiPlane, CiCircleChevDown, CiFileOn  , CiCircleInfo } from "react-icons/ci";
import { FaSpinner } from 'react-icons/fa';
import { CiSun } from 'react-icons/ci';

import { CiPaperplane } from "react-icons/ci";
import { useTheme } from '../../ThemeContext';
import ReactMarkdown from 'react-markdown';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

function Chat() {
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayedMessages, setDisplayedMessages] = useState([]);
    const { startupMode } = useTheme();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const messagesEndRef = useRef(null);

    const questions = [
        "Qual o segmento da sua startup?",
        "Quais problemas você quer suprir?",
        "Qual o grupo foco?"
    ];

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

            setMessages(prevMessages => [
                ...prevMessages,
                { text: botMessage, from: 'bot' }
            ]);
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

        const newUserMessage = { text: userMessage, from: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setDisplayedMessages(prev => [...prev, newUserMessage]);

        if (startupMode && questionIndex < questions.length) {
            setQuestionIndex(prev => prev + 1);
            setUserMessage('');
            if (questionIndex === questions.length - 1) {
                setTimeout(() => {
                    const startupInput = `
                    Ideias startup 
                    Segmento: ${messages[messages.length - 3].text}
                    Problemas: ${messages[messages.length - 2].text}
                    Grupo foco: ${messages[messages.length - 1].text}
                    `;

                    setDisplayedMessages(prev => [...prev, { text: "Aguarde...", from: 'bot' }]);
                    fetchResponse(startupInput);
                }, 500);
            }
        } else {
            fetchResponse(userMessage);
            setUserMessage('');
        }
    };

    const handleClearMessages = () => {
        setDisplayedMessages([]);
        setUserMessage('');
        setCurrentQuestionIndex(0);
        if (startupMode) {
            const welcomeMessage = { text: "Bem-vindo ao modo Startup! Vamos começar com algumas perguntas.", from: 'bot' };
            const firstQuestionMessage = { text: questions[0], from: 'bot' };
            setDisplayedMessages([welcomeMessage, firstQuestionMessage]);
        } else {
            const welcomeMessage = { text: "Bem-vindo ao modo Normal! Use o ChatGPT da sua forma.", from: 'bot' };
            setDisplayedMessages([welcomeMessage ]);

        }
    };

    const displayMessages = useCallback((msg) => {
        setDisplayedMessages(prev => [...prev, msg]);
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Texto copiado para a clipboard!');
            })
            .catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
    };

    useEffect(() => {
        if (startupMode) {
            if (questionIndex === 0) {
                const welcomeMessage = { text: "Bem-vindo ao modo Startup! Vamos começar com algumas perguntas.", from: 'bot' };
                setMessages(prev => [...prev, welcomeMessage]);
                displayMessages(welcomeMessage);
            }
            if (questionIndex < questions.length) {
                const questionMessage = { text: questions[questionIndex], from: 'bot' };
                setMessages(prev => [...prev, questionMessage]);
                displayMessages(questionMessage);
            }
        } else {
            handleClearMessages();

        }
    }, [questionIndex, startupMode]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [displayedMessages]);

    return (
        <div className="chat">
            <div className="chat__actions">
                <button className="chat__action" onClick={handleClearMessages}>
                    <CiCircleRemove />
                    {/* {startupMode ? "Modo Startup Ativado" : "Modo Startup Desligado"} */}
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
                {displayedMessages.map((msg, index) => (
                    <div key={index} className={`chat__message chat__message--${msg.from}`}>
                        <div>
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                            <span>&gt; {msg.from === "user" ? "by Me" : "by We AI"}</span>
                        </div>
                        <button className="chat__copy" onClick={() => copyToClipboard(msg.text)}><CiFileOn   /></button>
                    </div>
                ))}
                <div ref={messagesEndRef} />
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
                <div onClick={scrollToBottom} className="chat__messages__back">
                    <CiCircleChevDown />
                </div>
            </div>
        </div>
    );
};

export default Chat;
