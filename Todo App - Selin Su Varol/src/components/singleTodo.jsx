import { Button } from "@mui/material";
import React from "react";

const SingleTodo = ({ todo, setNewTodo,newTodo }) => {

    const deleteTodo = () => {
        fetch(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos/${todo.id}`, {
            method: "DELETE",
        }).then(() => {
            window.location.reload()
        });
    };

    const uncomplete = () =>{
        fetch(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isCompleted: false,
            }),
        }).then(() => {
            window.location.reload();
        });
    }
    const complete = () =>{
        fetch(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isCompleted: true,
            }),
        }).then(() => {
            window.location.reload();
        });
    }
    
    return (
        <div id={todo.id} 
        style={{
            textAlign:"center",
             display: "flex",
             alignItems:"center",
             justifyContent:"space-around",
             gap: "40px",
             padding: "20px",
             width: "100%",
             borderBottom: "1px solid orange",
             }}>
            <h3>{todo.content}</h3>
            <h3>{todo.isCompleted===false ?"not completed":"completed"}</h3>
            {todo.isCompleted===false ? 
            <Button 
            variant="contained" 
            color="success"
            onClick={complete}
            >Complete</Button>
             : 
            <Button 
                variant="outlined" 
                color="success"
                onClick={uncomplete}
            >Uncomplete</Button>
            }
            <Button
            variant="contained"
            color="error"
            onClick={deleteTodo}>Delete</Button>
        </div>
    );
    }

export default SingleTodo;