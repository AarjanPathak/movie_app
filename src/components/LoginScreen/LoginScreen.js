import React from 'react';
import './LoginScreen.css';
import logo from '../logo.png'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen--background'>
            <img className="loginScreen--logo" src={logo} />
            <button className='sign-in-btn'>Sign In</button>
            <div className='loginScreen--gradient'/>
        </div>

        <div className='loginScreen--body'>
          <>
          <h1>Watch your favorite Movies and TV series.</h1>
          <h3>Not a member? Sign up now</h3>
          <div className='loginScreen--input'>
            <form>
              <input type='email' placeholder='Email Address'/>
              <button className='loginScreen--btn'>GET STARTED</button>
            </form>
          </div>
          </>
        </div>
      
    </div>
  )
}

export default LoginScreen
