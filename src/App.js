import React from 'react';
import './App.css';
import Homescreen from "./components/Homescreen/Homescreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useEffect } from 'react';
import { auth } from './components/firebase';

function App() {

  const user = null;

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in
      }else{
        //Logged out
      }
    });
    return unsubscribe;
  } ,[])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
        <Routes>
          <Route path="/" element={<Homescreen/>} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
