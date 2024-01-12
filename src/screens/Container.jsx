import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './Container.css';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';


const customContainer = () => {

  return ( 
    <Container className='row'>
      <Grid container>
        <Grid item xs={12} md={7} className="column-1">
          <div className="welcome">
            <Typography variant="h1" className='custom-h1'>
              Welcome to your nameday app
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={5} className='column-2'>
          <div className="login-signup">
            <Login/>
            <Signup/>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default customContainer;



