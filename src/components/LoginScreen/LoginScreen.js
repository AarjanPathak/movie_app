import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../logo.png'
import SignIn from '../Sign In/SignIn';
import Register from '../Register/Register';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  
  const[signIn, setSignIn] = useState(false)  
  const[register, setRegister] = useState(false)

  return (
    <div className='loginScreen'>
        <div className='loginScreen--background'>
            <img className="loginScreen--logo" src={logo} />
            <button  onClick={()=>setSignIn(true)}  className='sign-in-btn'>Sign In</button>
            <div className='loginScreen--gradient'/>
        </div>
        
        <div className='loginScreen--body'>
          {signIn?(
            <SignIn />
          ) :     
          <>
          <h1>Watch your favorite Movies and TV series.</h1>
          <h3>Not a member? Register now</h3>
          <div className='loginScreen--input'>
              <button  onClick={()=>setRegister(true)}  className='loginScreen--btn'>REGISTER</button>
              <Register trigger={register}>
              </Register>
          </div>
          </>}
        </div>
      
    </div>
  )
}

export default LoginScreen
