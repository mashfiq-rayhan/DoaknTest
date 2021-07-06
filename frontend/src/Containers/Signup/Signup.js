import {  useDispatch } from 'react-redux';

import classes from "./Signup.module.css";
import signupClose from "../../Assets/Icons/SignupClose.png";
import SignupModal from "./SignupModal/SignupModal";
import useInput from '../../hooks/useInput';
import * as actions from '../../store/actions/index';


const SignupForm = props => {

  const { 
    value: firstName,
    inputChangedHandler: firstNameChangedHandler, 
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName 
  } = useInput(value => value.trim() !== '');
  const { 
    value: lastName,
    inputChangedHandler: lastNameChangedHandler, 
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName 
  } = useInput(value => value.trim() !== '');
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
  
  const { 
    value: phoneNumber, 
    inputChangedHandler: phoneNumberChangedHandler, 
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber
  } = useInput(value => value.trim().length === 11);
  const { 
    value: nid,
    inputChangedHandler: nidChangedHandler, 
    inputBlurHandler: nidBlurHandler,
    reset: resetNid 
  } = useInput(value => value.trim().length === 10);
  const { 
    value: gender,
    inputChangedHandler: genderChangedHandler, 
    inputBlurHandler: genderBlurHandler,
    reset: resetGender 
  } = useInput(value => value.trim() !== '');
  const { 
    value: birthday, 
    inputChangedHandler: birthdayChangedHandler, 
    inputBlurHandler: birthdayBlurHandler,
    reset: resetBirthday 
  } = useInput(value => value.trim() !== '');

  const dispatch = useDispatch();
  const onAuth = (firstName, lastName, email, password, phoneNumber, nid, gender, birthday) => dispatch(actions.authSignup(firstName, lastName, email, password, phoneNumber, nid, gender, birthday));

  
  const signupHandler = event => {
    event.preventDefault();
    onAuth(firstName, lastName, email, password, phoneNumber, nid, gender, birthday);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    resetPassword();
    resetNid();
    resetGender();
    resetBirthday()
  }

    
    return (
      <SignupModal show={props.show} closeModal={props.closeModal}>
        <div className={classes.MainDiv}>
          <div className={classes.HeaderDiv}>
            <h1 className={classes.h1}>Sign Up</h1>
            <p className={classes.p}>It's quick and easy</p>
            <img className={classes.Cross} src={signupClose} onClick={props.closeModal} alt="cross" />
            <hr className={classes.hr} />
          </div>
          <div className={classes.FormDiv}>
            <form onSubmit={signupHandler}>
              <input 
                    className={classes.InputName} 
                    type="text" 
                    placeholder="First Name"
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler}
                    value={firstName}
                    required />
              <input 
                    className={classes.InputName} 
                    type="text" 
                    placeholder="Last Name"
                    onChange={lastNameChangedHandler}
                    onBlur={lastNameBlurHandler}
                    value={lastName} 
                    required />
              <input 
                    className={classes.InputInfo} 
                    type="email" 
                    placeholder="Email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={email}
                    required />
              <input 
                    className={classes.InputInfo} 
                    type="password" 
                    placeholder="Password"
                    onChange={passwordChangedHandler}
                    onBlur={passwordBlurHandler}
                    value={password} 
                    required />
              <input 
                    className={classes.InputInfo} 
                    type="number" 
                    placeholder="Phone number"
                    onChange={phoneNumberChangedHandler}
                    onBlur={phoneNumberBlurHandler}
                    value={phoneNumber} 
                    required />
              <input 
                    className={classes.InputInfo} 
                    type="number" 
                    placeholder="NID"
                    onChange={nidChangedHandler}
                    onBlur={nidBlurHandler}
                    value={nid} />
              <div className={classes.FormDiv}>
                <p className={classes.BoldTag}>Gender</p>
                <div className={classes.GenderOptions}>
                  <input 
                        className={classes.GenderOptionSelect} 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="male"
                        onChange={genderChangedHandler}
                        onBlur={genderBlurHandler}
                        required />
                  <label className={classes.GenderOption} htmlFor="male">Male</label>
                </div>
                <div className={classes.GenderOptions}>
                  <input 
                        className={classes.GenderOptionSelect} 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female"
                        onChange={genderChangedHandler}
                        onBlur={genderBlurHandler}
                        required />
                  <label className={classes.GenderOption} htmlFor="female">Female</label>
                </div>
                <div className={classes.GenderOptions}>
                  <input 
                        className={classes.GenderOptionSelect} 
                        type="radio" 
                        id="custom" 
                        name="gender" 
                        value="custom"
                        onChange={genderChangedHandler}
                        onBlur={genderBlurHandler} 
                        required />
                  <label className={classes.GenderOption} htmlFor="other">Custom</label>
                </div>
                <p className={classes.BoldTag}>Date of Birth</p>
                <input 
                      className={classes.InputBirthday} 
                      type="date" 
                      id="birthday" 
                      name="birthday"
                      onChange={birthdayChangedHandler}
                      onBlur={birthdayBlurHandler}
                      value={birthday} 
                      required />
              </div>
              <p className={classes.Agreement}>By clicking signup you agree to our <span>Terms, Data Policy</span> and <span>Cookie Policy.</span> You may recieve SMS notification from us and can opt out at any time.</p>
              <button className={classes.SignupButton} type="submit">SIGN UP</button>
            </form>
          </div>
        </div> 
      </SignupModal>
    );
  };
  
  export default SignupForm;
