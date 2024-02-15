import React from 'react';
import { Grid } from '@mui/material';
import '../index.css';

import Title from '../components/typography';
import Button from '../components/button';
import Page from '../components/page';

import MyAppBar from '../components/navbar';

const Landing = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
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
    </Page>
  );
};

export default Landing;
