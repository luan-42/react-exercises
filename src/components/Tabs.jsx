import { useState } from "react";
import style from "./Tabs.module.css";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (str) => {setActiveTab(str)};

    return (
        <div className={style.container}>
            <nav>
                <button className={activeTab == "home" && style.active} onClick={() => handleTabClick("home")}>
                    Home
                </button>
                <button className={activeTab == "about" && style.active}onClick={() => handleTabClick("about")}>
                    About
                </button>
            </nav>
            {activeTab == "home" && <Home />}
            {activeTab == "about" && <About />}
        </div>
    );
}

function Home() {
    return (
        <>
            <h1>Welcome to my site!</h1>
        </>
    );
}

function About() {
    return (
        <>
            <h1>About</h1>
            <p>This website contains React exercises.</p>
        </>
    );
}