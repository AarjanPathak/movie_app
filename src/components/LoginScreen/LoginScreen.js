import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../logo.png'
import SignIn from '../Sign In/SignIn';

function LoginScreen() {

  const[signIn, setSignIn] = useState(false)  

  function handleClick(){
    setSignIn(true)
  }

  return (
    <div className='loginScreen'>
        <div className='loginScreen--background'>
            <img className="loginScreen--logo" src={logo} />
            <button  onClick={handleClick}  className='sign-in-btn'>Sign In</button>
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
            <form>
              <button className='loginScreen--btn'>REGISTER</button>
            </form>
          </div>
          </>}
        </div>
      
    </div>
  )
}

export default LoginScreen
