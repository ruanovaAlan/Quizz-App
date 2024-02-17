import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTIme] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return (() => {
            clearTimeout(timer);
        })
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTIme(prevRemainingTIme => prevRemainingTIme - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}