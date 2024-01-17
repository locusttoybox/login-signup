import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import '../../components/styles.css';

import userIcon from '../../assets/user.png';
import passwordIcon from '../../assets/padlock.png';
    
import Button from '../../components/button';
import Link from '../../components/link';
import Checkbox from '../../components/checkbox';
import Text from '../../components/text';
import Inputs from '../../components/inputs';

const Login = ({ onActionChange, action }) => {
    const [rememberMe, setRememberMe] = useState();


    return (
        <div className="container">
            <div className="header">
                <Typography variant='h2'>
                    Login
                </Typography>
            </div>
            <div className="inputs">
                <Grid>
                    <Inputs text='Username' size='medium' icon={userIcon}/>
                </Grid>
                <Grid>
                    <Inputs text='Password' size='medium' icon={passwordIcon}/>
                </Grid>
                    <Grid container alignItems='center' justifyContent='space-between' style={{ marginTop: '12px'}}>
                        <Grid item container alignItems='center' xs={6}>
                            <Checkbox
                                checked={rememberMe}
                                onChange={() => {
                                setRememberMe(!rememberMe)
                                 }}
                                />
                                <Text text= 'Remember me'/>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                             <Link text="Forgot password">
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
            />
            </div>
        </div>
    );

};

export default Login;