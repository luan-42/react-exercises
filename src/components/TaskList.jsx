import { useState } from "react";
import deleteIcon from "../assets/delete.svg";
import "./TaskList.css";

function Task({task, handleTaskClick, handleRemoveTask}) {
    return (
        <div className="task">
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
        <div className="input-task">
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
    let [filter, setFilter] = useState("todas");

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
            case "concluídas":
                return tasks.filter(task => task.isCompleted);
            case "pendentes":
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }

    return (
        <div className="task-container">
            <div className="task-card">
                <h1>Lista de tarefas</h1>

                <Input handleAddTask= {handleAddTask}/>

                <select onChange={(event) => {setFilter(event.currentTarget.value)}}>
                    <option value="todas">Todas</option>
                    <option value="concluídas">Tarefas concluídas</option>
                    <option value="pendentes">Tarefas pendentes</option>
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