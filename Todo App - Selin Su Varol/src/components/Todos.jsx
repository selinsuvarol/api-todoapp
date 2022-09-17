import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import SingleTodo from "./singleTodo";
import { Button, TextField } from "@mui/material";

const Todos = () => {
    const [newTodo, setNewTodo] = React.useState("");
    const [todos, setTodos] = useState();
    useEffect(() => {
        axios.get(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos
        `).then((res) => {
        const responseTodos = res.data;
        setTodos(responseTodos);
        });
    }, []);
    const addTodo = () => {
        newTodo.length < 3 ? alert("Please enter at least 3 characters") : 
        fetch(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: newTodo,
                status: "uncomplete",
            }),
        }).then(() => {
            window.location.reload()
        });
    };

    return (
        <div>
            <Nav />
            <main style={{padding: "20px", maxWidth:"60%"}}>
                <h1 style={{textAlign: "left", textTransform:"uppercase"}}>{localStorage.getItem("username")}'s To-Do List</h1>
                <div 
                style={{
                    backgroundColor: "peachpuff",
                    textAlign:"center",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"space-around",
                    gap: "40px",
                    width: "100%",
                    padding: "20px",
                    textTransform: "uppercase",
                    color: "black",
                    }}>
                    <h3>To-do Name</h3>
                    <h3>Status</h3>
                    <h3>Update</h3>
                    <h3>Action</h3>
                </div>
                <div style={{
                    textAlign:"center",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    gap: "40px",
                    padding: "20px",
                    textTransform: "uppercase",
                    color: "black",
                    width: "100%",
                    }}>
                <TextField 
                fullWidth
                required
                color= "warning"
                focused 
                id="outlined-basic" 
                label="Add A New To-Do" 
                placeholder="type here"
                name={newTodo}
                variant="outlined"
                minCharacters={3}
                onChange={(e)=>{setNewTodo(e.target.value)}} />
                <Button 
                    variant="contained" 
                    color="warning"
                    onClick={addTodo}
                >Add</Button>
                
                </div>
                {todos?.map((todo) => (
                    <SingleTodo todo={todo} />
                ))}
            </main>
            
        </div>
    );
};



export default Todos;