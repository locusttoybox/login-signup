import React from 'react';
import { Grid } from '@mui/material';
import Title from '../components/typography';
import MyAppBar from '../components/navbar';
import Page from '../components/page';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{ padding: '0' }}>
          <Title text="something" />
        </Grid>
        <Grid item xs={12} md={9} style={{ padding: '0' }}>
          <Title text="something" />
        </Grid>
        <Grid item xs={12} md={3} style={{ padding: '0' }}>
          <Title text="something" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
