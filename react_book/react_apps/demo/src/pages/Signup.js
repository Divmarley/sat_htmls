/** @format */

import React, { useState } from 'react';
import AppInput from '../components/AppInput';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [comPassword, setComPassword] = useState(null);

  const signupHandler = (e) => {
    e.preventDefault();
    // console.log(username,email,password,comPassword);
    axios
      .post('http://localhost:3004/sigup', {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  };

  return (
    <>
      <section className='blog-banner-area' id='category'>
        <div className='container h-100'>
          <div className='blog-banner'>
            <div className='text-center'>
              <h1>Register</h1>
              <nav aria-label='breadcrumb' className='banner-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Register
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='login_box_area section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='login_box_img'>
                <div className='hover'>
                  <h4>Already have an account?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <a className='button button-account' href='/login'>
                    Login Now
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='login_form_inner register_form_inner'>
                <h3>Create an account</h3>
                <form className='row login_form' action='#/' id='register_form'>
                  <AppInput
                    type='text'
                    className='form-control'
                    id='name'
                    name='username'
                    placeholder='Username'
                    onChange={(text) => setUsername(text.target.value)}
                  />
                  <AppInput
                    type='text'
                    className='form-control'
                    id='email'
                    name='email'
                    placeholder='Email Address'
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email Address'"
                    onChange={(text) => setEmail(text.target.value)}
                  />

                  <AppInput
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    placeholder='Password'
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'"
                    onChange={(text) => setPassword(text.target.value)}
                  />
                  <AppInput
                    type='password'
                    className='form-control'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Confirm Password'"
                    onChange={(text) => setComPassword(text.target.value)}
                  />

                  <div className='col-md-12 form-group'>
                    <button
                      type='submit'
                      value='submit'
                      className='button button-register w-100'
                      onClick={signupHandler}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
