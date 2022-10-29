import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
    const { todos, handleChangeProps, delTodo, setUpdate } = props

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={handleChangeProps}
                    delTodo={delTodo}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodosList
