import { useState } from "react";
import "./Counter.css";

export default function Counter() {
    let [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
    }

    const handleDecrement = () => {
        setCount(count => count - 1);
    }

    return (
        <div className="counter-container">
            <button className ="btn-counter" onClick={handleDecrement} style={{visibility: count > 0 ? "visible" : "hidden"}}>-</button>
            <p className="counter">{count}</p>
            <button className ="btn-counter" onClick={handleIncrement}>+</button>
        </div>
    );
}