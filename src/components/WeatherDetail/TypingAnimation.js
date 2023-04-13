import React, { useContext, useEffect, useMemo, useState } from 'react'
import FetchApiContext from '../../middleware/FetchApi';

export default function TypingAnimation() {
    const { visibility, weatherCondition } = useContext(FetchApiContext)
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const visibilityDistance = useMemo(() => Math.round(visibility), [visibility]);
    const words = useMemo(() => [`${weatherCondition}`, `${visibilityDistance} km`], [weatherCondition, visibilityDistance]);

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % words.length;
            const fullText = words[current];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum((loopNum) => loopNum + 1);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [text, isDeleting, typingSpeed, loopNum, words]);

    return (
        <h1>{text} </h1>
    );
}
