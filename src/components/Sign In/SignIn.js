import React from 'react'
import './SignIn.css'
import { auth } from '../firebase';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        });
    }

  return (
    <div className='signIn--body'>
        <span onClick={()=>{navigate('/login')}}  class="material-symbols-outlined">close</span>
            <form>
                <h1>Sign In</h1>
                <label htmlFor='email'>Email</label>
                <input ref = {emailRef} type="email" name='email' placeholder='Email'></input>
                <label htmlFor='password'>Password</label>
                <input ref = {passwordRef} type="password" name='password' placeholder='Password'></input>
                <button onClick={signIn} type='submit'>Sign</button>
            </form>
    </div>
  )
}

export default SignIn
