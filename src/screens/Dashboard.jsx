import React from 'react';
import { Grid, List, ListItem, ListItemText, Box } from '@mui/material';
// import Title from '../components/typography';
import MyAppBar from '../components/navbar';
import Page from '../components/page';
import Label from '../components/label';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <div className="container-dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box>
              <Label>
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
              </Label>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <div>Something</div>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
