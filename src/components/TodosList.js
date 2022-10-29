import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
    const { todos, handleChange, delTodo, setUpdate } = props

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChange={handleChange}
                    delTodo={delTodo}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodosList
