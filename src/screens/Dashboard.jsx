import React from 'react';
import { Grid, List, ListItem, ListItemText, Box } from '@mui/material';
// import Title from '../components/typography';
import MyAppBar from '../components/navbar';
import Page from '../components/page';
import MenuList from '../components/menuList';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <div className="container-dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box component="section" sx={{ p: 2, borderRadius: '10px', backgroundColor: 'white' }}>
              <List sx={{ paddingTop: 0 }}>
                <MenuList button>
                  <ListItemText primary="Something" />
                </MenuList>
                <ListItem button>
                  <ListItemText primary="Something" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something" />
                </ListItem>
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
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box component="section" sx={{ p: 2, borderRadius: '10px', backgroundColor: 'white' }}>
              <div>Something</div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
