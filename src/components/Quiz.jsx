import { useState, useCallback } from 'react';
import quizComleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js';

import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUsersAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id='summary'>
            <img src={quizComleteImg} alt="Trophy Icon" />
            <h2>Quiz is completed</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => {
                        return (
                            <li className='answer' key={answer}>
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}