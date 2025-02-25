import { useState } from "react";
import deleteIcon from "../assets/delete.svg";
import style from "./TaskList.module.css";

function Task({task, handleTaskClick, handleRemoveTask}) {
    return (
        <div className={style.task}>
            <p onClick={() => {handleTaskClick(task.id)}} style={{textDecoration: task.isCompleted ? "line-through" : "none"}}>
                {task.title}
            </p>
            <button onClick={() => {handleRemoveTask(task.id)}}>
                <img src={deleteIcon} />
            </button>
        </div>
    );
}

function Input({handleAddTask}) {
    let [input, setInput] = useState("");

    return (
        <div className={style.inputTask}>
            <input type="text" value={input} onChange={(event) => setInput(event.currentTarget.value)}/>
            <button onClick={() => {
                handleAddTask(input);
                setInput("");
            }}>Adicionar</button>
        </div>
    );
}

export default function TaskList() {
    let [tasks, setTasks] = useState([]);
    let [filter, setFilter] = useState("all");

    const handleTaskClick = (id) => {
        setTasks((tasks) => tasks.map((task) => 
            task.id === id ? {...task, isCompleted: !task.isCompleted}: task
        ));
    }

    const handleRemoveTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }

    const handleAddTask = (title) => {
        if (title.trim()) {
            setTasks((tasks) => [...tasks, {id: crypto.randomUUID(), title, isCompleted: false}]);
        }
    }

    const filterTasks = (tasks) => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.isCompleted);
            case "pending":
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }

    return (
        <div className={style.taskContainer}>
            <div className={style.taskCard}>
                <h1>To-do list</h1>

                <Input handleAddTask= {handleAddTask}/>

                <select onChange={(event) => {setFilter(event.currentTarget.value)}}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>

                {filterTasks(tasks).map((task) => {
                    return (
                        <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleRemoveTask={handleRemoveTask} />
                    );
                })}
            </div>
        </div>
    );
}