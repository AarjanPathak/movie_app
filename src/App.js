import React from 'react';
import './App.css';
import Homescreen from "./Homescreen"
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Homescreen />
    </div>
  );
}

export default App;
