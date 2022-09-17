import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Nav({username}) {

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"right" }}>
            Welcome to Todo App, {localStorage.getItem("username")}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
