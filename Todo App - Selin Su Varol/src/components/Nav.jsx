import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Nav() {

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundImage: "linear-gradient(to right, #043a02, #005e3c, #00837a, #00a7bd, #2cc9fc)",
        height: "90px",}}>
        <Toolbar 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}>
          <Typography variant="h4" component="div" sx={{ fontFamily: "Nabla", marginLeft: "10px" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" 
              style={{height:"40px", marginRight: "10px"}}></img>
            To-do App
          </Typography>
          <Typography variant="h6" component="div" 
          sx={{
            textAlign:"right",
            backgroundColor:"transparent",
            borderRadius:"40px",
            border:"4px solid white",
            color:"white",
            padding: "10px 30px" }}>
            Username: {localStorage.getItem("username")}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
