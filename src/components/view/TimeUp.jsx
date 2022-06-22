import React, { useState } from 'react';

export default function TimeUp() {
    const [time, setTime] = useState(1);
    let num;
    const handleClick = () => {
        if(time >= 12) {
            num = 1;
        } else {
            num = time + 1;
        }
        setTime(num);
    };

    return (
        <div>
            <span>현재 시각 : {time}시</span>
            <button onClick={handleClick}>time up!</button>
        </div>
    );
};