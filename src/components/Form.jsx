import { useRef, useState } from "react";
import style from "./Form.module.css";

export default function Form() {
    const [formData, setFormData] = useState(null);
    const [formState, setFormState] = useState({name: '', email: '', password: ''});
    const formRef = useRef();

    const onChange = (event) => {
        setFormState(prev => {return {...prev, [event.target.name]: event.target.value}});
    }

    const submit = (e) => {
        if (formRef.current.checkValidity()) {
            e.preventDefault();
            const data = new FormData(formRef.current);
            setFormData({
                name: data.get("name"),
                email: data.get("email"),
                password: data.get("password"),
            });
        }
    }

    return (
        <>
            {formData ?
            <div className={style.msg}>
                <h1>Welcome, {formData.name}!</h1>
            </div>
            :
            <form ref={formRef} className={style.form}>
                <h1>Registration form</h1>
                <label>Name:
                    <input name="name" type="text" value={formState.name} onChange={onChange} required/>
                </label>
                <label>Email:
                    <input name="email" type="email" value={formState.email} onChange={onChange} required/>
                </label>
                <label>Password:
                    <input name="password" type="password" value={formState.password} onChange={onChange} required minLength={8}/>
                </label>
                <button onClick={submit}>Sign Up</button>
            </form>
            }
        </>

    );
}