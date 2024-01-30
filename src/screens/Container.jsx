import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import './Container.css';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

import Title from '../components/typography';
import Button from '../components/button';

const customContainer = () => {
  const [active, setActive] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  const onSubmit = (data) => {
    if (active === 'login') {
      console.log('doo login stuff');
    } else {
      console.log('do signup stuuf');
    }
  };

  return (
    <Container className="row">
      <Grid container>
        <Grid item xs={12} md={6} className="column-1">
          <div className="welcome">
            <Title text="Welcome to your name day app" size="h1" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="column-2">
           <div className='tabs'>
            <div className='tabs-menu'>
            <Button text="Login" onClick={() => setActive('login')} /> 
            <Button text="Signup" onClick={() => setActive('signup')} />
            </div>
          <div className="login-signup">
            {active === 'login' ? (
              <Login onSubmit={onSubmit} />
            ) : (
              <Signup onSubmit={onSubmit} />
            )}
           </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default customContainer;