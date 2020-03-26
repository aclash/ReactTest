import React, {useState, useEffect} from 'react';
function Example(){
    const [count, setCount] = useState(0);

    function increament(){
        setCount(preCount => preCount + 1);
    }

    function decreament(){
        setCount(preCount => preCount - 1);
    }

    function change() {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        document.title = `you click ${count} times!`;
        return () => {};
    }, [count]);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {increament}>Increment</button>
            <button  onClick = {decreament}>Decrement</button>
        </div>
    );
}

export default Example