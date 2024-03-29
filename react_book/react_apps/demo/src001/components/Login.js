/** @format */

import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/login.css';
import AppInput from './AppInput';
import AppButton from './AppButton';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const logonButtonHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const signupButtonHandler = (event) => {
    event.preventDefault();
    console.log('click signup');
  };
  return (
    <div className='parent clearfix'>
      <Navbar />
      <div className='login'>
        <div className='container'>
          <h1>
            Login to access to
            <br />
            your account
          </h1>

          <div className='login-form'>
            <form action=''>
              <AppInput
                placeholder='E-mail Address'
                mytype='email'
                onChange={(email) => setEmail(email.target.value)}
              />
              <AppInput
                placeholder='Password'
                mytype='password'
                onChange={(password) => setPassword(password.target.value)}
              />

              <div className='remember-form'>
                <input type='checkbox' />
                <span>Remember me</span>
              </div>
              <div className='forget-pass'>
                <a href='/'>Forgot Password ?</a>
              </div>

              <AppButton label='login' onClick={logonButtonHandler} />
              <AppButton label='Sigup' onClick={signupButtonHandler} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
