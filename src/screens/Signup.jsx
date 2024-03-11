import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles.css';
import Button from '../components/button';

import userIcon from '../assets/user.png';
import emailIcon from '../assets/mail.png';
import passwordIcon from '../assets/padlock.png';

import Input from '../components/input';
import Title from '../components/typography';

const SignUp = ({ onSubmit }) => {
  // const onSubmit = () => {
  //   console.log('submitting');
  //   //use firebase to sign up user with email
  // };

  return (
    <div className="container">
      <div>
        <div className="accout-text">
          <Title text="Create Account" size="h2" />
        </div>
      </div>
      <div className="inputs">
        <Input placeholder="Username" size="medium" icon={userIcon} />
        <Input placeholder="Email" size="medium" icon={emailIcon} />
        <Input placeholder="Password" size="medium" icon={passwordIcon} />
      </div>
      <div className="button-container">
        <Button text="Sign up" onClick={onSubmit} />
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onSumbit: PropTypes.func,
};

export default SignUp;
