import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp () {

    const [email , setEmail] = useState('');
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    function emailHandle(e) {
        setEmail(e.target.value) 
        console.log('console logging input value of : ', {email})
    }
    function userNameHandle(e) {
        setUserName(e.target.value) 
        console.log('console logging input value of : ', {userName})
    }
    function passwordHandle(e) {
        setPassword(e.target.value) 
        console.log('console logging input value of : ', {password})
    }
    function confirmPWHandle(e) {
        setConfirmPassword(e.target.value) 
        console.log('console logging input value of : ', {confirmPassword})
    }

    return (
        <div className='signUp-div'>

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account!</p>

                <form /* onSubmit={handleSubmit} */ className='signUp-form'>

                    <div className='access-inputs'>
                        <div className='email'>
                        <i class="fas fa-envelope"></i>
                            <input className='signUp-input' type='email'  onChange={emailHandle} name='email' value={email} placeholder='Email'></input>
                        </div>
                        <div className='username'>
                            <i class="fas fa-user"></i>
                            <input className='signUp-input' type='name' onChange={userNameHandle} name='userName' value={userName} placeholder='Username'></input>
                         </div>
                         <div className='password'>
                            <i class="fas fa-lock"></i>
                            <input className='signUp-input' type='password' onChange={passwordHandle} name='password' value={password} placeholder='Password'></input>
                        </div>
                        <div className='confirm-password'>
                            <i class="fas fa-check-circle"></i>
                            <input className='signUp-input' type='password' onChange={confirmPWHandle} name='password' value={confirmPassword} placeholder='Confirm Password'></input>
                        </div>
                    </div> {/* access-inputs end */}

                    <div className='prev-user'>
                        <p>Already have an account? <Link to='/login' className='a-tag-logIn' src='#'>Login here.</Link></p>
                    </div>

                    <div className='button-div'>
                        <button className='signUp-button'>Register</button>
                    </div>

                </form> {/* signUp-form end */}

        </div> /* signUp-div end */
    )
}

export default SignUp;