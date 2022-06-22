import React, { useState } from 'react';

const Work = () => ['홍길동', '김민수'];

export default function TextUpload() {
    const [name, setName] = useState(() => Work());
    const [input, setInput] = useState('');

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    const handleUpload = () => {
        setName((preveState) => {
            return [input, ...preveState];
            // preveState 이전 state
        });
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Upload</button>
            {name.map((t, index) => {
                return <p key={index}>{t}</p>;
            })}
        </div>
    );
};
