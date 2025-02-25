import { useState } from "react";
import style from "./List.module.css";

export default function List() {
    const names = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
    const [search, setSearch] = useState("");

    return (
        <div className={style.container}>
            <h1>List filter</h1>
            <input type="text" placeholder="Search name..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul>
            {names
            .filter(name => name.toLowerCase().includes(search.toLowerCase()))
            .map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    );
}