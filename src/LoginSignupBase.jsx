import React, { useState } from 'react';
import './LoginSignupBase.css';
import './TwoRowFlexGrid';

import userIcon from './components/assets/user.png';
import emailIcon from './components/assets/mail.png';
import passwordIcon from './components/assets/padlock.png';

const LoginSignupBase = ({ action, onActionChange }) => {
    return (
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
          </div>
          <div className="inputs">
            {action === 'Login' ? ( <div></div> ) : (
              <div className="input">
                <img src={userIcon} alt="" />
                <input type="text" placeholder="Username" name="" id="" />
              </div>
            )}
            <div className="input">
              <img src={emailIcon} alt="" />
              <input type="email" placeholder="Email" name="" id="" />
            </div>
            <div className="input">
              <img src={passwordIcon} alt="" />
              <input type="password" placeholder="Password" name="" id="" />
            </div>
          </div>
          {action === 'Sign up' ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              <span>Forgot password</span>
            </div>
          )}
          <div className="submit-container">
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => {
                onActionChange('Sign up');
              }}
            >
              Sign up
            </div>
            <div
              className={action === 'Sign up' ? 'submit gray' : 'submit'}
              onClick={() => {
                onActionChange('Login');
              }}
            >
              Login
            </div>
          </div>
        </div>
      );
    };
    
    export default LoginSignupBase;
    
