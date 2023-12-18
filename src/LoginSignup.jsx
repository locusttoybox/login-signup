import React, {useState} from 'react';
import './LoginSignup.css';

import userIcon from './components/assets/user.png';
import emailIcon from './components/assets/mail.png';
import passwordIcon from './components/assets/padlock.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');


  console.log ({username});

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
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
            setAction('Sign up');
          }}
        >
          Sign up
        </div>
        <div
          className={action === 'Sign up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
