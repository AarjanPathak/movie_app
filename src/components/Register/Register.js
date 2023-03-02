import React from 'react'
import './Register.css'
import { useRef } from 'react';
import { auth } from '../firebase';

function Register(props) {
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        });
    };

  return (props.trigger)? (
    <div className='Register'>
        <div className='register--body'>
            <form>
                <h1>Register</h1>
                <label htmlFor='email'>Email</label>
                <input ref={emailRef} type="email" name='email' placeholder='Email'></input>
                <label htmlFor='password'>Password</label>
                <input ref={passwordRef} type="password" name='password' placeholder='Password'></input>
                <button onClick = {register} type='submit'>Register</button>
            </form>
        </div>
    </div>
  ): ""
}

export default Register
