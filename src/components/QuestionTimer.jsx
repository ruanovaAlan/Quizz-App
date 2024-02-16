import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTIme] = useState(timeout)

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTIme(prevRemainingTIme => prevRemainingTIme - 100);
        }, 100);
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}