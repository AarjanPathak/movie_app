import React from 'react';
import './App.css';
import Homescreen from "./components/Homescreen/Homescreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/Profile/ProfileScreen';;

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth)=>{
      if(userAuth){
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
        })
        );
      }else{
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  } ,[dispatch])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
        <Routes>
          <Route path="/" element={<Homescreen/>} />
          <Route path="/profile" element={<ProfileScreen/>}></Route>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
