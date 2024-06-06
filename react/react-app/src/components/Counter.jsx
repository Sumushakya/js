import {useState} from "react";

export default function Counter(){
    const[count,setCount] = useState(0);
    const[incrementBy,setIncrementBy] = useState(1);
    function Increment(){
        //setCount(count+1);
        setCount(count+incrementBy);
    }
    function Decrement(){
        //setCount(count-1);
        setCount(count-incrementBy);
    }
    function increaseIncrement(){
        setIncrementBy(incrementBy+1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy-1);
    }

    return (
    <div>
        <h1>Count value is:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

        <h1>Incrementing the value by: {incrementBy}</h1>
        <button onClick={increaseIncrement}>Increase Increment</button>
        <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
);
}