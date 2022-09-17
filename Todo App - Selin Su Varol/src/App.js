import React, { useState } from "react";
import './App.css';
import Login from './components/Login';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [username, setUsername] = useState("");

  return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login setUsername={setUsername} username={username}/>} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
