import React, { useState, useRef, useEffect } from "react";

function App() {
    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);

    // console.log('😱랜더링...');

    // const increaseCountState = () => {
    //     setCount(count + 1);
    // };

    // const increaseCountRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log("Ref: ", countRef.current);
    // }
    // const [render, setRender] = useState(0);
    // const countRef = useRef(0);
    // let countVar = 0;

    // const doRendering = () => {
    //     setRender(render + 1);
    // }

    // const increaseRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log('ref: ', countRef.current);
    // };

    // const increaseVar = () => {
    //     countVar = countVar + 1;
    //     console.log('var: ', countVar);
    // };

    // const printResults = () => {
    //     console.log(`ref: ${countRef.current}, var: ${countVar}`);
    // }
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('랜더링 수: ', renderCount.current);
    });
    return(
        <div>
            {/* <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>랜더 !</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={printResults}>Ref Var 값 출력</button> */}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>    
    );
};

export default App;