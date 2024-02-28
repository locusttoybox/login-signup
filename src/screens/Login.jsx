import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import '../components/styles.css';
import { loginUser } from '../features/user/userSlice';

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
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      username: 'exampleUser',
    };
    dispatch(loginUser(user));
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="container">
      <Grid className="menu-links" item sx={6}>
        <div className="accout-text">
          <Title text="Login" size="h2" />
        </div>
      </Grid>
      <form onSubmit={handleLogin} className="inputs">
        <Input placeholder="Username" size="medium" icon={userIcon} />
        <Input placeholder="Password" size="medium" icon={passwordIcon} />
        <Grid container alignItems="center" justifyContent="space-between" style={{ marginTop: '12px' }}>
          <Grid item container alignItems="center" xs={6} style={{ marginBottom: '24px' }}>
            <Checkbox
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <Text text="Remember me" />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right', marginBottom: '24px' }}>
            <Link text="Forgot password"></Link>
          </Grid>
        </Grid>
        <div className="button-container">
          <Button text="Login" onClick={handleLogin} marginBottom="20px" />
        </div>
        <Grid item xs={12} className="create-link" size="h2">
          <Link href="sign-up" text="Create account" />
        </Grid>
      </form>
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func,
};

export default Login;
