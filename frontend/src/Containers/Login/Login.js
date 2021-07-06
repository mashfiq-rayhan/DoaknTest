import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Login.module.css';
import LogoTag from '../../Components/UI/LogoTag/LogoTag';
import Signup from '../Signup/Signup';
import useInput from '../../hooks/useInput';
import * as actions from '../../store/actions/index';

const Login = (props) => {

  const { 
    value: email, 
    inputChangedHandler: emailChangedHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail 
  } = useInput(value => value.trim() !== '' && value.includes('@'));
  const { 
    value: password,
    inputChangedHandler: passwordChangedHandler, 
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword 
  } = useInput(value => value.trim().length >= 6);
    
    const dispatch = useDispatch();
    const onAuth = (email, password) => dispatch(actions.authLogin(email, password));
    
    const loginHandler = event => {
      event.preventDefault();
      onAuth(email, password);
      resetEmail();
      resetPassword();
    }
   

  const [ isSignup, setIsSignup ] = useState(false);
 const showSignupModalHandler = () => {
        setIsSignup(!isSignup);
      }


  return (
    <div className={classes.Login}>
      <LogoTag />
      <div className={classes.LoginForm}>
        <form onSubmit={loginHandler}>
          <div className={classes.LoginControl}>
            <input
              className={classes.InputInfo}
              type="text"
              placeholder="Email address or Phone number"
              value={email}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              required
            />
            <input
              className={classes.InputInfo}
              type="password"
              placeholder="Password"
              value={password}
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <button className={classes.LoginButton} type="submit">Log In</button>
          </div>
        </form>
        <div className={classes.ForgottenSection}>
          <a href="/" className={classes.ForgottenPassword}>Forgotten Password ?</a>
          <hr className={classes.Line} />
        </div>
        <button className={classes.CreateButton} onClick={showSignupModalHandler} >Create New Account</button>
      </div>
      
      {isSignup && (
        <Signup show={isSignup} closeModal={showSignupModalHandler} />
      )}
    </div>
  );

};



export default Login;


    
