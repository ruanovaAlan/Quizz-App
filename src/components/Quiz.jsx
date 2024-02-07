import { useState } from 'react';

export default function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswers, setUsersAnswers] = useState([]);

    return (
        <p>Question</p>
    )
}