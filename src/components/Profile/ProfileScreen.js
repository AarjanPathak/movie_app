import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../firebase'
import Navbar from '../Navigation Bar/Navbar'
import './ProfileScreen.css'

function ProfileScreen() {

  const user = useSelector(selectUser)

  return (
    <div className='profile'>
      <Navbar />
      <div className='profile--body'>
        <h1>Your Profile</h1>
        <div className='profile--info'>
          <img className="profile--logo" src="http://cdn.onlinewebfonts.com/svg/img_162386.png" alt=""/>
          <div className='profile--plans'>
            <h2 className='email'>Email: {user.email}</h2>
            <h2 className='plans'>Current Plan: none</h2>
          </div>
        </div>
        <button onClick={()=> auth.signOut()}   className='signOut--btn'>Sign out</button>
      </div>
    </div>
  )
}

export default ProfileScreen
