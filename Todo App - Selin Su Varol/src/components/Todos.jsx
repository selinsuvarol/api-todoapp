import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";


const Todos = () => {
    const [todos, setTodos] = useState();
    useEffect(() => {
        axios.get(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos
        `).then((res) => {
        const responseTodos = res.data;
        setTodos(responseTodos);
        });
    }, []);

    return (
        <div>
            <Nav />
            {todos?.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.id}</h1>
                    <h1>{todo.content}</h1>
                    <p>{todo.isCompleted.toString()}</p>
                </div>
            ))}
        </div>
    );
};


export default Todos;