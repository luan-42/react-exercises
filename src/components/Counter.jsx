import { useState } from "react";
import style from "./Counter.module.css";

export default function Counter() {
    let [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
    }

    const handleDecrement = () => {
        setCount(count => count - 1);
    }

    return (
        <div className={style.counterContainer}>
            <button className ={style.btnCounter} onClick={handleDecrement} style={{visibility: count > 0 ? "visible" : "hidden"}}>-</button>
            <p className={style.counter}>{count}</p>
            <button className={style.btnCounter} onClick={handleIncrement}>+</button>
        </div>
    );
}