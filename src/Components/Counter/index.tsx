import React from 'react';

type CounterProps = {
    count: number;
    onCountChange: (newCount: number) => void;
};

const Counter: React.FC<CounterProps> = ({ count, onCountChange }) => {

    const handleIncrement = () => {
        const newCount = count + 1;
        onCountChange(newCount);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;
