import { useEffect, useRef, useState } from "react";
import { Timer as TimerIcon} from 'lucide-react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import style from "./Timer.module.css";

export default function Timer() {
    const [initial, setInitial] = useState(10);
    const [seconds, setSeconds] = useState(10);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef();

    const inputSeconds = () => {
        let n = NaN;
        while (Number.isNaN(n)) {
            n = +window.prompt("Please enter the number of seconds for the countdown: ");
        }
        setInitial(n);
        setSeconds(n);
    }

    const start = () => {
        setRunning(true);
    }

    const pause = () => {
        setRunning(false);
    }

    const restart = () => {
        setSeconds(initial);
    }

    useEffect(() => {
        clearInterval(intervalRef.current);
        if (running) {
            intervalRef.current = setInterval(() => {
                if (seconds == 0) {
                    clearInterval(intervalRef.current);
                    window.alert("Time's up!");
                } else setSeconds(prev => prev - 1);
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [running, seconds]);

    return (
        <div className={style.timerContainer}>
            <p className={style.time}>{seconds}</p>
            <TimerIcon onClick={inputSeconds}/>
            {running
            ?
            <Pause size={32} onClick={pause} />
            :
            <Play size={32} onClick={start } />}
            <RotateCcw size={32} onClick={restart} />
        </div>
    );
}