import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function Home () {
   
       return (
    <div>

           <div className='img-section'>
               <p>Example</p>
               <img src='https://freefrontend.com/assets/img/jquery-form-validation-plugins/jquery-form-validation.png'></img>
           </div>

           <div className='home-Section'>
                     <h1>Form Validation</h1>
                     <Link to='signup'><button>View Form Examples</button></Link>
           </div> {/* home-Section end  */}

    </div>
       )
}

export default Home