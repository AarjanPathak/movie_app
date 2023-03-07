import React from 'react'
import Navbar from '../Navigation Bar/Navbar'
import './ProfileScreen.css'

function ProfileScreen() {
  return (
    <div className='profile'>
      <Navbar />
      <div className='profile--body'>
        <h1>Your Profile</h1>
        <div className='profile--info'>
          <img className="profile--logo" src="http://cdn.onlinewebfonts.com/svg/img_162386.png" alt=""/>
          <div className='profile--plans'>
            <h2 className='email'>Email: abc@gmail.com</h2>
            <h2 className='plans'>Current Plan: none</h2>
          </div>
        </div>
        <button className='signOut--btn'>Sign out</button>
      </div>
    </div>
  )
}

export default ProfileScreen
