  import React from 'react';
  import { TextField, Typography, Grid } from '@mui/material';
  import '../components/styles.css';
  import Button from '../components/button';


  import userIcon from '../assets/user.png';
  import emailIcon from '../assets/mail.png';
  import passwordIcon from '../assets/padlock.png';

  import Input from '../components/input';
  import Title from '../components/typography';


  const SignUp = ({ onSubmit }) => {

    return (
      <div className='container'>
        <div>
          <Title text='Create Account' size='h3'/>
        </div>
        <div className='inputs'>
          <Input placeholder="Username" size="medium" icon={userIcon} />
          <Input placeholder="Email" size="medium" icon={emailIcon} />
          <Input placeholder="Password" size="medium" icon={passwordIcon} />
        </div>
        <div className='button-container'>
            <Button text="Sign up" onClick={() => setActive('signup')} /> 
        </div>
      </div>
    )
  }



  export default SignUp;
