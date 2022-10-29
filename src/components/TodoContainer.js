import React, { useEffect, useState } from "react"
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom"
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos());

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, []);

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const handleChange = (id) => {
        setTodos(prevState => (
            prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        ))
    };

    const delTodo = id => {
        setTodos(
            [
                ...todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        );
    };

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos(
            [...todos, newTodo]
        );
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={
                    <div className="container" >
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <TodosList
                                todos={todos}
                                handleChangeProps={handleChange}
                                delTodo={delTodo}
                                setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                } />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </>
    )
}
export default TodoContainer