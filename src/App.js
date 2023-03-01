import React from 'react';
import './App.css';
import Homescreen from "./components/Homescreen/Homescreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginScreen/LoginScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
