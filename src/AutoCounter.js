import React, { useEffect, useState } from 'react'

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h2>Auto Count {count}</h2>
        </div>
    )
}

export default AutoCounter
