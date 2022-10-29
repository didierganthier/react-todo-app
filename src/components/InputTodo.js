import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
    const [title, setTitle] = useState("");

    const onChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("");
        } else {
            alert("Please write item")
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
            </button>
        </form>
    )
}
export default InputTodo