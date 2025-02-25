import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from 'lucide-react';
import style from "./Stopwatch.module.css";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef();

    const restart = () => setTime(0);

    const start = () => {
        setRunning(true);
        intervalRef.current = setInterval(
            () => setTime(prev => prev + 1), 1000
        )
    };

    const pause = () => {
        setRunning(false);
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        start();
        return () => pause();
    }, []);

    return (
        <div className={style.stopwatchContainer}>
            <p className={style.time}>{time}</p>
            {running
            ?
            <Pause size={32} onClick={pause} />
            :
            <Play size={32} onClick={start} />}
            <RotateCcw size={32} onClick={restart} />
        </div>
    );
}