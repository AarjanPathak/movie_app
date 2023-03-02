import React from 'react'
import './Register.css'

function Register(props) {
  return (props.trigger)? (
    <div className='Register'>
        <div className='register--body'>
            <form>
                <h1>Sign In</h1>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' placeholder='Username'></input>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' placeholder='Email'></input>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' placeholder='Password'></input>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  ): ""
}

export default Register
