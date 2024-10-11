import React, { useRef, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import {Link, useNavigate, useLocation} from 'react-router-dom';

import axios from '../../api/axios';

import Header from '../Header';
import Cart from '../Cart';
import Footer from '../Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle, faApple} from '@fortawesome/free-brands-svg-icons'

const LOGIN_URL = '/authenticate';


function LogIn() {

  // const {useAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  // here put useEffect;


  const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        const response = await axios.post(LOGIN_URL,JSON.stringify({

        }))
      } catch (error) {
        
      }
  }

  return (
    <div>
        <Header />

        <Cart />

        <section className="signin sec_form">
          <div className="form_container">
              <p className="title">Welcome back</p>
              <form onSubmit={handleSubmit} className="form">
                  <input
                    type="email" 
                    placeholder="Email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    ref={userRef}
                    required 
                  />
                  <input 
                    type="password" 
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)} 
                  />
                  <p className="page-link">
                      <a href="#" className="page-link-label">Forgot Password?</a>
                  </p>

                  <button className="form-btn">Login</button>
              </form>

              <p className="sign-up-label">
                  Don't have an account? <Link to="/signup" className="sign-up-link">Sign up</Link>
              </p>

              <div className="buttons-container">
                  <div className="apple-login-button">
                      <FontAwesomeIcon icon={faApple} className='regisIcon' />
                      <span>Login with Apple</span>
                  </div>
                  <div className="google-login-button">
                      <FontAwesomeIcon icon={faGoogle} className='regisIcon' />
                      <span>Login with Google</span>
                  </div>
              </div>
          </div>
      </section>

      <Footer />

    </div>
  )
}

export default LogIn