import React from 'react'
import AppInput from '../components/AppInput'

export default function Login() {
  return (
    <>
    <section className="blog-banner-area" id="category">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Login / Register</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Login/Register</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section> 


	<section className="login_box_area section-margin">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="login_box_img">
						<div className="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a className="button button-account" href="/signup">Create an Account</a>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="login_form_inner">
						<h3>Log in to enter</h3>
						<form className="row login_form" action="#/" id="contactForm" >
              <AppInput classNameName="form-control" placeholder='Username' id="name" name="name"  type="text"/>
              <AppInput  type="password" classNameName="form-control" id="password" name="password" placeholder="Password"  />
 

							{/* <div className="col-md-12 form-group">
								<input type="text" className="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
							</div>
							<div className="col-md-12 form-group">
								<input type="text" className="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
							</div> */}
							<div className="col-md-12 form-group">
								<div className="creat_account">
									{/* <input type="checkbox" id="f-option2" name="selector"/> */}
                  <AppInput type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div className="col-md-12 form-group">
								<button type="submit" value="submit" className="button button-login w-100">Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
