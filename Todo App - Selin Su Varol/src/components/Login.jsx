import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/selin-su-varol-664936a3/?originalSubdomain=tr">
        Selin Su Varol
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide({setUsername, username}) {
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    // set the state of the user
    setUsername(username)
    // store the user in localStorage
    localStorage.setItem('username', username)
    toast("Logged in succesfully!, redirecting")
    setTimeout(() => {
      navigate("/todos")
    }
    , 3000)
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
            position="top-right"
            hideProgressBar={false}
            autoClose={3000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img4.goodfon.com/wallpaper/nbig/1/f8/8bit-8bit-grafika-les-retro-fon-pikseli-pxl.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1"
            sx={{
                color: "orange",
                mt: "20%",
                fontFamily: "Nabla",
                wordWrap: "wrap",
                maxWidth: "60%",
                paddingBottom: "10%",
                fontSize: "4rem",
                }}>
              welcome!
            </Typography>
            <Typography
                component="h5"
                sx={{
                    color: "coral",
                    fontSize: "1.2rem",
                }}>
                please enter your name
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                onChange= {e => setUsername(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#043A02" }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}