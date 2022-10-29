import React, { useEffect, useState } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = (props) => {

    const [isEditing, setEditing] = useState(false);

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const { completed, id, title } = props.todo
    const { handleChangeProps, delTodo, setUpdate } = props
    const { item, textInput } = styles

    const handleEditing = () => {
        setEditing(true);
    }

    let viewMode = {}
    let editMode = {}

    if (isEditing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => handleChangeProps(id)}
                />
                <button onClick={() => delTodo(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input
                type="text"
                style={editMode}
                className={textInput}
                value={title}
                onChange={e => {
                    setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}

export default TodoItem
