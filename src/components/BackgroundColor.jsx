import { useEffect, useState } from "react";
import "./BackgroundColor.css";
import restartIcon from '../assets/restart.svg'

export default function BackgroundColor() {
    
    let [color, setColor] = useState("#FFFFFF");

    const getRandomColor = () => {
        const getRandomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
        return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
    };

    useEffect(() => {document.body.style.backgroundColor = color}, [color]);

    return (
        <div className="bg-container">
            <button onClick={() => {setColor(getRandomColor())}}>Mudar cor do fundo</button>
            <button onClick={() => {setColor("#FFFFFF")}}><img src={restartIcon} /></button>
        </div>
    );
}