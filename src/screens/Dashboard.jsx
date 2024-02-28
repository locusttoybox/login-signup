import React from 'react';
import { Grid } from '@mui/material';
import Title from '../components/typography';

const Dashboard = () => {
  return (
    <div className="container">
      <Grid items sx={3}>
        <Title text="something" />
      </Grid>
    </div>
  );
};

export default Dashboard;
