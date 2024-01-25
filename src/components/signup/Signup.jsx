  import React from 'react';
  import { TextField, Typography, Grid } from '@mui/material';
  // import Button from '../../components/button';
  import '../../components/styles.css';


  import userIcon from '../../assets/user.png';
  import emailIcon from '../../assets/mail.png';
  import passwordIcon from '../../assets/padlock.png';

  import Input from '../../components/input';


  const SignUp = ({ onSubmit }) => {

    return (
      <div className='container'>
        <div className='inputs'>
          <Input placeholder="Username" size="medium" icon={userIcon} />
          <Input placeholder="Email" size="medium" icon={emailIcon} />
          <Input placeholder="Password" size="medium" icon={passwordIcon} />
        </div>

      </div>
    )
  }



  export default SignUp;
