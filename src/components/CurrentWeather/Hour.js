import React, { useEffect, useState } from 'react'

export default function Hour() {
    const [localHour, setLocalHour] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const options = {
                hour: 'numeric',
                minute: 'numeric',
            };
            const localHour = date.toLocaleTimeString([], options);
            setLocalHour(localHour);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            as of {localHour}
        </div>
    )
}