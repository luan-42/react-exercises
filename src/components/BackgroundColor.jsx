import { useEffect, useRef, useState } from "react";
import style from "./BackgroundColor.module.css";
import { RefreshCw } from 'lucide-react';

export default function BackgroundColor() {
    
    let [color, setColor] = useState("#f8fafc");
    const containerRef = useRef();

    const getRandomColor = () => {
        const getRandomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
        return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
    };

    useEffect(() => {containerRef.current.style.backgroundColor = color}, [color]);

    return (
        <div className={style.bgContainer} ref={containerRef}>
            <button onClick={() => {setColor(getRandomColor())}}>Change background color</button>
            <button onClick={() => {setColor("#f8fafc")}}><RefreshCw size={24}/></button>
        </div>
    );
}