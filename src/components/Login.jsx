<<<<<<< HEAD
<<<<<<< HEAD:src/components/login/Login.jsx
import React, { useState } from 'react';
import { TextField, Link, Typography, InputAdornment, Grid } from '@mui/material';
import '../../components/styles.css';

import userIcon from '../../assets/user.png';
import passwordIcon from '../../assets/padlock.png';
    
import Button from '../../components/button';
import HyperlinkStyle from '../../styles/hyperlinkStyles';
import StyledCheckbox from '../../styles/checkboxStyles';
=======
// import React, { useState } from 'react';
// import LoginSignupBase from './LoginSignupBase';

// const Login = () => {
//     const [action, setAction] = useState('Login');
>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx):src/components/Login.jsx

=======
// import React, { useState } from 'react';
// import LoginSignupBase from './LoginSignupBase';

// const Login = () => {
//     const [action, setAction] = useState('Login');

>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx)
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
<<<<<<< HEAD
<<<<<<< HEAD:src/components/login/Login.jsx
            className={`${action === 'Login' ? 'submit' : 'submit gray'}`}
=======
            className={`${root} ${action === 'Login' ? 'submit' : 'submit gray'}`}
>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx):src/components/Login.jsx
=======
            className={`${root} ${action === 'Login' ? 'submit' : 'submit gray'}`}
>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx)
            onClick={() => {
              onActionChange('Sign up');
            }}
            text={"Sign up"}
            main
<<<<<<< HEAD
<<<<<<< HEAD:src/components/login/Login.jsx
            />
=======
          />
>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx):src/components/Login.jsx
=======
          />
>>>>>>> parent of 67f588d (deleted loginSignupBase, made changes to app.js, created buttonStyles, hyperlinkStyles, checkboxStyles, integrated them into login.jsx)
            </div>
        </div>
    );

};

export default Login;