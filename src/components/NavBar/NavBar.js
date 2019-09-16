import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


function NavBar () {
   
       return (
           <div className='nav-Section'>
                     <Link to='/home' /* href='#' */>Home</Link>
                     <Link to='/signup' /* href='#' */>Sign Up</Link>
                     <Link to='/login' /* href='#' */>Log In</Link>
           </div> /* nav-Section end */
       )
}

export default NavBar