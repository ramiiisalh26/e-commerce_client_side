import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle, faApple} from '@fortawesome/free-brands-svg-icons'
import Header from '../Header';
import Cart from '../Cart';
import Footer from '../Footer';
import axios from '../../api/axios';
// import { logInCustomer, signUpCustomer } from '../../services/authServices';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/v1/auth/register';

function SignUp() {
    
    const userRef = useRef();
    const errRef = useRef();

    const [first_name,setFirst_name] = useState('');

    const [last_name,setLast_name] = useState('');

    const [username,setUserName] = useState('');
    const [validName,setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd,setValidPwd] = useState(false);
    const [pwdFocus,setPwdFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch,setValidMatch] = useState(false);
    const [matchFocus,setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    // useEffect(() =>{
    //   setValidName(USER_REGEX.test(username));
    // },[username])

    // useEffect(()=>{
    //   setValidPwd(PWD_REGEX.test(pwd));
    //   setValidMatch(pwd === matchPwd);
    // },[pwd,matchPwd])

    // useEffect(()=>{
    //   setErrMsg('');
    // },[username,pwd,matchPwd])

    const handleSubmit = async (e) =>{
      e.preventDefault();
      // console.log("Hello rami")
      // if button enabled with JS hack
      const v1 = USER_REGEX.test(username);
      const v2 = PWD_REGEX.test(pwd);
      // if(!v1 || !v2){
      //   console.log(v1 + " "+ v2);
      //   setErrMsg("Invalid Entry");
      //   return;
      // }
      console.log(first_name + " " + last_name + " " + username);

      try {
        axios
        const response = await axios.post(REGISTER_URL,
          JSON.stringify({ first_name, last_name, username, pwd}),
          {
            headers: {'Content-Type': 'application/json'},
            // withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        setSuccess(true);
        // clear state and controlled inputs
        setUserName('');
        setPwd('');
      } catch (err) {
        if(!err?.response){
          setErrMsg('No Server Response');
        }else if(err?.response?.status === 409){
          setErrMsg('Username Taken');
        }else{
          setErrMsg('Registration Failed')
        }
      }
    }

  return (
        <div>
            <Header />
            <Cart />
            {success ? (
              <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
            ): (
              <section className="signin sec_form">
                <div className="form_container">
                    <p className="title">Welcome In Topico</p>
                    <form onSubmit={handleSubmit} className="form">
                        <input 
                          type="text" 
                          placeholder="First Name"
                          // ref={userRef}
                          autoComplete='off'
                          onChange={(e) => setFirst_name(e.target.value)}
                          value={first_name}
                          // aria-invalid={validName ? "false" : "true"} 
                          // aria-describedby='uidnote'
                          // onFocus={() => setUserFocus(true)}
                          // onBlur={() => setUserFocus(false)}
                          required
                        />
                        <input 
                          type="text" 
                          placeholder="Last Name"
                          autoComplete='off'
                          onChange={(e) => setLast_name(e.target.value)}
                          value={last_name}
                          required
                        />
                        <input 
                          type="email" 
                          placeholder="Email"
                          autoComplete='off'
                          onChange={(e) => setUserName(e.target.value)}
                          value={username}
                          required
                       />
                        <input 
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                        />
                        <input 
                          type="password" 
                          placeholder="re-Password"
                          onChange={(e) => setMatchPwd(e.target.value)}
                          value={matchPwd}
                          required
                        />

                        <button  className="form-btn">Sign up</button>
                    </form>

                    <p className="sign-up-label">
                        have an account? <a href="login.html" className="sign-up-link">Login</a>
                    </p>

                    <div className="buttons-container">
                        <div className="apple-login-button">
                            <FontAwesomeIcon icon={faApple} className="regisIcon"></FontAwesomeIcon>
                            <span>Sign up with Apple</span>
                        </div>
                        <div className="google-login-button">
                            <FontAwesomeIcon icon={faGoogle} className="regisIcon" />
                            <span>Sign up with Google</span>
                        </div>
                    </div>
                </div>
              </section>
            )}
            
          <Footer />
        </div>
  )
}

export default SignUp