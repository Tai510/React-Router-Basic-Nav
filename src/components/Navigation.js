import React from 'react';
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div className='nav-section'>
        
        <div className='links-header'>

          <div className='left-header-section'>
            <Link to='home'>
            <img src='https://www.hkinfosoft.com/wp-content/uploads/2018/03/Dynamic-transitions-with-react-router-and-react-transition-group-200-min.png'></img>
            </Link>
            <h1>React Router Mini</h1>
          </div>

          <div className='links'>
            <Link to='signup' href="">Sign Up</Link>
            <Link to='login' href="">Log In</Link>
          </div> {/* link end */}

        </div> {/* links-header end */}

    </div> /* nav-section end */
  );
};

export default Navigation;
