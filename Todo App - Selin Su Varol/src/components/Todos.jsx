import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
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
            <main style={{padding: "40px", maxWidth:"90%"}}>
                <h2 style={{textAlign: "left", textTransform:"uppercase", color:"coral"}}>{localStorage.getItem("username")}'s To-Do List</h2>
                <div 
                style={{
                    backgroundColor: "coral",
                    textAlign:"center",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"space-around",
                    gap: "40px",
                    width: "100%",
                    borderRadius: "30px 30px 0 0",
                    padding: "10px",
                    textTransform: "uppercase",
                    color: "white",
                    marginBottom: "20px"
                    }}>
                    <h4>To-do Name</h4>
                    <h4>Status</h4>
                    <h4>Update</h4>
                    <h4>Action</h4>
                </div>
                <div style={{
                    textAlign:"center",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    gap: "40px",
                    padding: "10px",
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
         <Footer />
        </div>
    );
};



export default Todos;