import React from 'react';
import { Container, Toolbar, AppBar, Grid, Box } from '@mui/material';
import '../index.css';

import Title from '../components/typography';
import Button from '../components/button';
import Link from '../components/link';
// import Navbar from '../components/navbar';

const Landing = () => {
  return (
    <Container>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar className="wrapper">
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="nav-links">
              <Link text="About" />
              <Link text="Contact" />
              <Link text="Something" />
            </div>
          </Box>
          <Box className="login-landing">
            <Button href="login" text="Login" small bgColor="light" />
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container alignItems="center" height="100vh">
        <Grid item sx={12} md={8}>
          <div className="container-landing">
            <div className="title">
              <Title text="Welcome to your nameday app" size="h1" />
            </div>
            <div className="subtitle">
              <Title text="Short discription about app and features" size="h3" />
            </div>
            <Button text="Explore" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
