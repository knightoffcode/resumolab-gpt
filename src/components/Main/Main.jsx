import React, { useState, useCallback } from 'react';
import OpenAI from "openai";
import { CiCircleInfo } from "react-icons/ci";
import { FaSpinner } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';
import { debounce } from 'lodash';

/**
 *
 * @returns
 */

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

function Main() {

    const [sector, setSector] = useState('');
    const [problem, setProblem] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [generatedIdeas, setGeneratedIdeas] = useState('');
    const [loading, setLoading] = useState(false);

    const { darkTheme } = useTheme();

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const fetchIdeas = async (input, useRandomIdea) => {
        setLoading(true);
        setGeneratedIdeas('');

        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: input }],
            });
            setGeneratedIdeas(response.choices[0].message.content);
        } catch (error) {
            if (error.response?.status === 429) {
                setGeneratedIdeas('Limite de requisições excedido. Tente novamente mais tarde.');
            } else {
                console.error('Erro ao buscar resposta:', error);
                setGeneratedIdeas('Desculpe, houve um erro ao obter a resposta.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = useCallback((useRandomIdea = false) => {
        let input;
        if (useRandomIdea) {
            input = 'Gerar uma ideia aleatória de startup.';
        } else {
            if (!sector || !problem) return;
            input = `Setor: ${sector}, Problema: ${problem}, Público-alvo: ${targetAudience}`;
        }
        fetchIdeas(input, useRandomIdea);
    }, [sector, problem, targetAudience]);

    const debouncedHandleSubmit = useCallback(debounce(handleSubmit, 1000), [handleSubmit]);

    return (
        <div className="main__content">
            <div className="main__wrapper">
                <div className="main__info">
                    <div className="main__info__left">
                        <CiCircleInfo />
                    </div>
                    <div className="main__info__right">
                        <h2>Bem-vindo ao Innovate Hub</h2>
                        <p>Preencha os campos abaixo e clique em<strong> Gerar ideia</strong>, e geraremos ideias criativas para seu novo projeto.</p>
                    </div>
                </div>
                <div className="main__entry">
                    <input
                        type="text"
                        className="main__input"
                        placeholder="Setor (ex: Saúde)"
                        value={sector}
                        onChange={(e) => handleInputChange(e, setSector)}
                    />
                    <input
                        type="text"
                        className="main__input"
                        placeholder="Problema a resolver"
                        value={problem}
                        onChange={(e) => handleInputChange(e, setProblem)}
                    />
                    <input
                        type="text"
                        className="main__input"
                        placeholder="Público-alvo"
                        value={targetAudience}
                        onChange={(e) => handleInputChange(e, setTargetAudience)}
                    />
                </div>
                <div className="main__action">
                    <button onClick={() => debouncedHandleSubmit(false)} className="main__button">
                        {loading ? <FaSpinner className="rotate" /> : 'Gerar Ideia'}
                    </button>
                    <button onClick={() => debouncedHandleSubmit(true)} className="main__button">
                        {loading ? <FaSpinner className="rotate" /> : 'Aleatória'}
                    </button>
                </div>
                {generatedIdeas && (
                    <div className="main__results">
                        <h2>Aqui está seu resultado:</h2>
                        <p>{generatedIdeas}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Main;
