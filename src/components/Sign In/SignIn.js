import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <div className='signIn--body'>
        <span class="material-symbols-outlined">close</span>
            <form>
                <h1>Sign In</h1>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' placeholder='Email'></input>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' placeholder='Password'></input>
                <button type='submit'>Sign</button>
            </form>
    </div>
  )
}

export default SignIn
