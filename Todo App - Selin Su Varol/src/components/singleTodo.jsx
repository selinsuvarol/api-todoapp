import { Button } from "@mui/material";
import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleTodo = ({todo}) => {
    const deleteTodo = () => {
        fetch(`https://631322eda8d3f673ffc4fe06.mockapi.io/todos/${todo.id}`, {
            method: "DELETE",
        }).then(() => {
            toast("To-do deleted succesfully!")
            setTimeout(() => {
                window.location.reload()
            }
            , 2000)
        })
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
        <>
        <ToastContainer
            position="top-right"
            hideProgressBar={false}
            autoClose={2000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <div id={todo.id} 
        style={{
            textAlign:"center",
             display: "flex",
             alignItems:"center",
             justifyContent:"space-around",
             gap: "40px",
             padding: "20px",
             width: "100%",
             border: "2px dotted coral",
             marginTop: "10px",
             color: "coral",
             }}>
            <h4>{todo.content}</h4>
            <h4>{todo.isCompleted===false ?"not completed":"completed"}</h4>
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
        </>
    );
    }

export default SingleTodo;