import React, {useState} from 'react';
import {Typography, Grid} from '@mui/material';
import '../components/styles.css';

import userIcon from '../assets/user.png';
import passwordIcon from '../assets/padlock.png';

import Button from '../components/button';
import Link from '../components/link';
import Checkbox from '../components/checkbox';
import Text from '../components/text';
import Input from '../components/input';
import Title from '../components/typography';

const Login = ({ onSubmit }) => {
  const [rememberMe, setRememberMe] = useState();

  return (
    <div className="container">
      <Grid className='menu-links' item sx={6}>
      <div className='accout-text'>
          <Title text='Login' size='h2'/>
      </div>
      </Grid> 
      <div className="inputs">
        <Input placeholder="Username" size="medium" icon={userIcon} />
        <Input placeholder="Password" size="medium" icon={passwordIcon} />
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{marginTop: '12px'}}
        >
          <Grid item container alignItems="center" xs={6}>
            <Checkbox
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <Text text="Remember me" />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Link text="Forgot password"></Link>
          </Grid>
        </Grid>
          <div className='button-container'>
            <Button text="Login" onClick={() => setActive('login')} /> 
          </div>
      </div>
    </div>
  );
};

export default Login;