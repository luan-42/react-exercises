import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import style from "./Gallery.module.css";

export default function Gallery() {
    const arts = ["./A2_01.jpg", "./A2_02.jpg", "./A2_03.jpg", "./A2_04.jpg", "./A2_05.jpg", "./A2_06.jpg"];
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const handleImageClick = (index) => {
        setIsOpen(true);
        setSelected(index);
    }

    const onButtonClick = (n) => {
        if (selected + n == arts.length) setSelected(0);
        else if (selected + n < 0) setSelected(arts.length - 1);
        else setSelected(prev => prev + n);
    }

    return (
        <div className={style.gallery}>
            <h1 className={style.title}>Avatar: The Way Of Water</h1>
            <p>Art by: <a href="https://dylancolestudio.com/">Dylan Cole</a></p>
            <div className={style.grid}>
                {arts.map((src, index) => <img key={index} src={src} onClick={() => handleImageClick(index)} />)}
            </div>
            {isOpen &&
                <div className={style.modal} >
                    <button onClick={() => onButtonClick(-1)} className={style.left}>
                        <ChevronLeft size={48} />
                    </button>
                    <img src={arts[selected]} />
                    <button onClick={() => onButtonClick(1)} className={style.right}>
                        <ChevronRight  size={48} />
                    </button>
                    <button className={style.close} onClick={() => setIsOpen(false)}><X /></button>
                </div>
            }
        </div>
    );
}