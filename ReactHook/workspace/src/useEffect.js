import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

function App() {
//     const [count, setCount] = useState(1);
//     const [name, setName] = useState('');

//     const handleCountUpdate = () => {
//         setCount(count + 1);
//     };

//     const handleInputChange = (e) => {
//         setName(e.target.value);
//     };
//     // // 랜더링 될때마다 매번 실행됨
//     // useEffect(() => {
//     //     console.log('랜더링😱')
//     // })

//     // // 마운팅 + count가 변화할때마다 실행됨
//     // useEffect(() => {
//     //     console.log('💯count 변화!!!')
//     // }, [count]);
    
//     // // 마운팅 + name이 변화할때마다 실행됨
//     // useEffect(() => {
//     //     console.log('⭐️name 변화!!!')
//     // }, [name]);
    
//     useEffect(() => {
//         console.log('마운팅 🫠');
//     }, [])

    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    );
};

export default App;