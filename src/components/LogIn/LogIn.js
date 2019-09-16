import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

function LogIn () {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    function userNameHandle(e) {
        setUserName(e.target.value) 
        console.log('console logging input value of : ', {userName})
    }
    function passwordHandle(e) {
        setPassword(e.target.value) 
        console.log('console logging input value of : ', {password})
    }

    
    return (
        <div className='logIn-div'>

                <h1>Log In</h1>
                <p>Please fill in this form to log into account!</p>

                <form className='logIn-form'>

                    <div className='access-logIn-inputs'>
                        <div className='username'>
                            <i class="fas fa-user"></i>
                            <input className='logIn-input' type='name' onChange={userNameHandle} name='userName' value={userName} placeholder='Username'></input>
                         </div>
                         <div className='password'>
                            <i class="fas fa-lock"></i>
                            <input className='logIn-input' type='password' onChange={passwordHandle} name='password' value={password} placeholder='Password'></input>
                        </div>
                    </div> {/* access-logIn-inputs end */}

                    <div className='none-user'>
                        <p>Not registered? <Link to='/signup' className='a-tag-logIn' src='#'>Sign up here.</Link></p>
                    </div>

                    <div className='button-div2'>
                        <button className='signUp-button'>Log In</button>
                    </div>

                </form> {/* logIn-form end */}

        </div> /* logIn-div end */
    )
}

export default LogIn;
