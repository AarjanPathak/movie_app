import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../logo.png'

function Navbar() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () =>window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={`nav  ${show && 'nav--black'}`}>
        <div className='nav--contents'>
            <img className='nav--logo' src={logo}/>
            <img className='nav--avatar' src="http://cdn.onlinewebfonts.com/svg/img_162386.png" alt=""/>
        </div>
    </div>
  )
}

export default Navbar
