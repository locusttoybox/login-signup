import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
// import Title from '../components/typography';
import MyAppBar from '../components/navbar';
import Page from '../components/page';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <div className="container-dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem button>
                <ListItemText primary="Something" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Something" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Something" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h2">Something</Typography>
            {/* Add more content here */}
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
