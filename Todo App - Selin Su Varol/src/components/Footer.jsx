import React from "react";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div style={{
            backgroundImage: "linear-gradient(to right, #043a02, #005e3c, #00837a, #00a7bd, #2cc9fc)",
            textAlign:"center",
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between",
            width: "100vw",
            bottom: "0",
            height: "50px",
            position: "fixed",
            color: "white",
        }}>
            <h5 style={{padding:"40px"}}>© 2022 Selin Su Varol</h5>
            <div style={{display: "flex", alignItems:"center", height:"100%"}}>
                <EmailIcon></EmailIcon>
                <h5 style={{padding:"40px"}}><a href="mailto:selinsuvarol@gmail.com" style={{textDecoration: "none", color:"white"}}>
            email me</a></h5>
            </div>          
        </div>
    )
}

export default Footer