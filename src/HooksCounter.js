import React, {useState, useEffect} from 'react';
import {store, decrement2} from './App'

function HooksCounter(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        store.dispatch(decrement2());
        //console.log(store.getState());
    }, []);
    
    function increament(){
        setCount(preCount => preCount + 1);
    }

    function decreament(){
        setCount(preCount => preCount - 1);
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

export default HooksCounter