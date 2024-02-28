import React from 'react';
import { Grid } from '@mui/material';
import Title from '../components/typography';
import MyAppBar from '../components/navbar';
import Page from '../components/page';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <Grid item sx={3}>
        <Title text="something" />
      </Grid>
      <Grid item sx={6}>
        <Title text="is out" />
      </Grid>
      <Grid item sx={3}>
        <Title text="there" />
      </Grid>
    </Page>
  );
};

export default Dashboard;
