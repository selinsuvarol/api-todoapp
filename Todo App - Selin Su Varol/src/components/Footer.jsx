import React from "react";

const Footer = () => {
    return (
        <div style={{
            backgroundImage: "linear-gradient(to right, #043a02, #005e3c, #00837a, #00a7bd, #2cc9fc)",
            textAlign:"center",
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between",
            border: "1px solid black",
            width: "100vw",
            bottom: "0",
            height: "50px",
            position: "fixed",
            color: "white",
        }}>
            <h4 style={{padding:"40px"}}>© 2022 Selin Su Varol</h4>
            <h4 style={{padding:"40px"}}><a href="mailto:selinsuvarol@gmail.com" style={{textDecoration: "none", color:"white"}}>email me</a></h4>
            
        </div>
    )
}

export default Footer