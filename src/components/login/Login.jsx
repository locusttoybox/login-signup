import React, { useState } from 'react';
import { Grid } from '@mui/material';
import '../../components/styles.css';

import userIcon from '../../assets/user.png';
import passwordIcon from '../../assets/padlock.png';

import Link from '../../components/link';
import Checkbox from '../../components/checkbox';
import Text from '../../components/text';
import Input from '../../components/input';
import Button from '../../components/button';

const Login = ({ onSubmit }) => {
  const [rememberMe, setRememberMe] = useState();

  return (
    <div className="container">
      <div className="header">
      </div>
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
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link text="Don't have an account?"></Link>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button text='Submit'/> 
        </div>

      </div>
    </div>
  );
};

export default Login;