import React from "react";

const Footer = () => {
    return (
        <div style={{
            backgroundColor: "#F29600",
            textAlign:"center",
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around",
            width: "100vw",
            bottom: "0",
            height: "50px",
            position: "fixed",
            color: "white",
        }}>
        <h4 style={{}}>© 2022 Selin Su Varol</h4>
        <a href="mailto:selinsuvarol@gmail.com" style={{textDecoration: "none", color:"white"}}>email me</a>
        </div>
    )
}

export default Footer