import React from 'react';
import { Grid, List, Box } from '@mui/material';
import MyAppBar from '../components/navbar';
import Page from '../components/page';
import Title from '../components/typography';
import MenuList from '../components/menuList';
import '../components/styles.css';
import profileImage from '../assets/orange.avif';
// import Calendar from '../components/calendar';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <div className="container-dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box component="section" sx={{ p: 2, borderRadius: '10px', backgroundColor: 'white' }}>
              <List sx={{ paddingTop: 0 }}>
                <MenuList
                  sx={{ fontSize: 'h3' }}
                  className="menu-list"
                  items={['Something', 'Something', 'Something', 'Something', 'Something', 'Something', 'Something']}
                />
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box component="section">
              <Title style={{ marginBottom: '20px' }} text="Welcome Your Name" size="h2" />
              <img src={profileImage} alt="avocado" style={{ borderRadius: '10px', width: '50%' }} />
            </Box>
          </Grid>
          <Box component="section">{/* <Calendar /> */}</Box>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
