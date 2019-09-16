import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer () {
   
       return (
           <div className='footer-Section'>
                     <Link to='/home' /* href='#' */>Home</Link>
                     <p>Copyright © 2015, La Casa Restaurant. All Rights Reserved.</p>
           </div> /* nav-Section end */
       )
}

export default Footer