import React, { useState } from 'react';
import { TextField, Typography, Link, InputAdornment } from '@mui/material';
// import { AccountCircle, Mail, Lock } from '@mui/icons-material';
import './styles.css';
import '../screens/Container';
import buttonStyles from '../styles/buttonStyles';
import Button from '../components/button'


import userIcon from '../assets/user.png';
import emailIcon from '../assets/mail.png';
import passwordIcon from '../assets/padlock.png';



const LoginSignupBase = ({ action, onActionChange }) => {
  const { root } = buttonStyles;

    return (
        <div className="container">
          <div className="header">
            <Typography variant="h4" fontFamily='Roboto' fontWeight="500" color={'white'} fontSize='32px'>
            {action} Login
            </Typography>
          </div>
          <div className="inputs">
            {action === 'Login' ? ( <div></div> ) : (
              <div className="input">
                <TextField 
                type="text" 
                placeholder='Username' 
                name='' 
                id='' 
                variant='outlined' 
                fullWidth 
                InputProps={{startAdornment: (
                  <InputAdornment position="start">
                  <img src={userIcon} alt='' />
                  </InputAdornment>
                ),
              }}
              />
              </div>
            )}
          <div className="input">
            <TextField
              type='email'
              placeholder='Email'
              name=''
              id=''
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={emailIcon} alt="" />
                  </InputAdornment>
                )
              }}
              />
          </div>
          <div className="input">
            <TextField
            type='password'
            placeholder='Password'
            name=''
            id=''
            variant='outlined'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <img src={passwordIcon} alt="" />
                </InputAdornment>
              ),
            }}
            />
          </div>
          </div>
          {action === 'Sign up' ? (
          <div></div>
          ) : (
          <div className="forgot password">
            <Typography variant="h4" fontFamily='Roboto' fontSize='16px' marginTop='20px'>
            <Link href='#' color='white' underline='none'>
              Forgot password
            </Link>
            </Typography>
          </div>
        )}

        <div className="submit-container">
          <Button
            className={`${root} ${action === 'Login' ? 'submit' : 'submit gray'}`}
            onClick={() => {
              onActionChange('Sign up');
            }}
            text={"Sign up"}
            main
          />
          <Button
            className={`${root} ${action === 'Sign up' ? 'submit' : 'submit gray'}`}
            onClick={() => {
              onActionChange('Login');
            }}
            text={'Login'}
          />
        </div>
      </div>
    );
  };

    export default LoginSignupBase;
    
