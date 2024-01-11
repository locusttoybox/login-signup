import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './Container.css';
import LoginSignup from'./LoginSignupBase';


const AppContainer = () => {

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
            <LoginSignup />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppContainer;



