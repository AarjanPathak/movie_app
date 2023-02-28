import React, { useEffect, useState } from 'react'
import './Navbar.css';

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
            <img className='nav--logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            <img className='nav--avatar' src="https://i0.wp.com/www.nintendo-town.fr/wp-content/uploads/2022/01/arcane-jinx.jpg?fit=1024%2C576&ssl=1" alt=""/>
        </div>
    </div>
  )
}

export default Navbar
