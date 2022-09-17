import * as React from 'react';
import './App.css';
import Login from './components/Login';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nabla',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login/>
      </div>
    </ThemeProvider>
  );
}

export default App;
