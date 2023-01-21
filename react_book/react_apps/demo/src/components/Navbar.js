/** @format */

import React from 'react';
import { Outlet, Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <header className='header_area'>
      <div className='main_menu'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <Link className='navbar-brand logo_h' href='index.html'>
              <img src='img/logo.png' alt='' />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='/navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div
              className='collapse navbar-collapse offset'
              id='navbarSupportedContent'>
              <ul className='nav navbar-nav menu_nav ml-auto mr-auto'>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item submenu dropdown'>
                  <Link
                    href='/'
                    className='nav-link dropdown-toggle'
                    data-toggle='dropdown'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    Shop
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link className='nav-link' href='category.html'>
                        Shop Category
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='single-product.html'>
                        Product Details
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='checkout.html'>
                        Product Checkout
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='confirmation.html'>
                        Confirmation
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='cart.html'>
                        Shopping Cart
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item submenu dropdown'>
                  <Link
                    href='/'
                    className='nav-link dropdown-toggle'
                    data-toggle='dropdown'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    Blog
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link className='nav-link' href='blog.html'>
                        Blog
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='single-blog.html'>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item submenu dropdown'>
                  <Link
                    href='/'
                    className='nav-link dropdown-toggle'
                    data-toggle='dropdown'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    Pages
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link className='nav-link' href='login.html'>
                        Login
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='register.html'>
                        Register
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' href='tracking-order.html'>
                        Tracking
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>

              <ul className='nav-shop'>
                <li className='nav-item'>
                  <button>
                    <i className='ti-search'></i>
                  </button>
                </li>
                <li className='nav-item'>
                  <button>
                    <i className='ti-shopping-cart'></i>
                    <span className='nav-shop__circle'>3</span>
                  </button>{' '}
                </li>
                <li className='nav-item'>
                  <Link className='button button-header' href='/'>
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <Outlet />
    </>
  );
}
