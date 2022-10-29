import React from "react"

const TodoItem = (props) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
            />
            {props.todo.title}
            <button onClick={() => props.delTodo(props.todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem
