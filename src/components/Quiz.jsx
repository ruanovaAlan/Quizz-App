import { useState, useCallback } from 'react';
import quizComleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js';

import Question from './Question.jsx';

export default function Quiz() {
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUsersAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer];
            });
        },
        []
    );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id='summary'>
            <img src={quizComleteImg} alt="Trophy Icon" />
            <h2>Quiz is completed</h2>
        </div>
    }


    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>

    )
}