import React, { useState } from 'react';
import { TextField, Link, Typography, InputAdornment, Grid } from '@mui/material';
import '../../components/styles.css';

import userIcon from '../../assets/user.png';
import passwordIcon from '../../assets/padlock.png';
    
import Button from '../../components/button';
import HyperlinkStyle from '../../styles/hyperlinkStyles';
import StyledCheckbox from '../../styles/checkboxStyles';


const Login = ({ onActionChange, action }) => {
    const [rememberMe, setRememberMe] = useState();


    return (
        <div className="container">
            <div className="header">
                <Typography variant="h4" fontFamily="Roboto" fontWeight="500" color="white" fontSize="32px">
                    Login
                </Typography>
            </div>
            <div className="inputs">
                <div className="input" style={{ marginBottom: '25px'}}>
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
                                <Grid container alignItems='center' justifyContent='space-between' style={{ marginTop: '12px'}}>
                                    <Grid item container alignItems='center' xs={6}>
                                        <StyledCheckbox
                                            checked={rememberMe}
                                            onChange={() => {
                                                setRememberMe(!rememberMe)
                                            }}
                                        />
                                        <Typography variant='body2' color='white'>
                                            Remember me
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <Link href='#' sx={HyperlinkStyle().passwordLink}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                </Grid>
                        </div>
                <div className="submit-container">
          <Button
            className={`${action === 'Login' ? 'submit' : 'submit gray'}`}
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