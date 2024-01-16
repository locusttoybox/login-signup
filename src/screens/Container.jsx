import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './Container.css';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

import Title from '../components/typography';



const customContainer = () => {

  return ( 
    <Container className='row'>
      <Grid container>
        <Grid item xs={12} md={7} className="column-1">
          <div className="welcome">
          <Title text='Welocome to your name day app' size='h1'/>
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



