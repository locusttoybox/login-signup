// import React, { useState } from 'react';
// import LoginSignupBase from './LoginSignupBase';

// const Login = () => {
//     const [action, setAction] = useState('Login');

//     return <LoginSignupBase action={action} onActionChange={setAction} />
// }

// export default Login;


import React from 'react';
import { TextField, Typography, Link, InputAdornment } from '@mui/material';
import Button from '../components/button';
import buttonStyles from '../styles/buttonStyles';

import userIcon from '../assets/user.png';
import passwordIcon from '../assets/padlock.png';

const Login = ({ onActionChange, action }) => {
    const { root } = buttonStyles;
    
    return (
        <div className="container">
            <div className="header">
                <Typography variant="h4" fontFamily="Roboto" fontWeight="500" color="white" fontSize="32px">
                    Login
                </Typography>
            </div>
            <div className="inputs">
                <div className="input">
                    <TextField
                        type='text'
                        placeholder='Username'
                        name=''
                        variant='outlined'
                        fullWidth
                        InputProps={{
                            startAdornment: (
                            <InputAdornment possition="start">
                             <img src={userIcon} alt="" />
                             </InputAdornment>
                                ),
                            }} />
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
                                        <InputAdornment possition='start'>
                                            <img src={passwordIcon} alt="" />
                                        </InputAdornment>
                                    )
                                }} />
                             </div>
                        </div>
                <div className="submit-container">
          <Button
            className={`${root} ${action === 'Login' ? 'submit' : 'submit gray'}`}
            onClick={() => {
              onActionChange('Sign up');
            }}
            text={"Sign up"}
            main
          />
            </div>
        </div>
    );

};

export default Login;