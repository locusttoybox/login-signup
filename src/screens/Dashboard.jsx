import React from 'react';
import { Grid, List, Box } from '@mui/material';
import MyAppBar from '../components/navbar';
import Page from '../components/page';
import Text from '../components/typography';
import MenuList from '../components/menuList';
import '../components/styles.css';
import profileImage from '../assets/flamingo.png';

// import Calendar from '../components/calendar';

const Dashboard = () => {
  return (
    <Page AppBarComponent={MyAppBar}>
      <div className="container-dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              component="section"
              sx={{
                p: 2,
                borderRadius: '10px',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="welcome-text">
                <Text text="Welcome Your Name" size="h3" />
              </div>
              <img src={profileImage} alt="" style={{ width: '100px', justifyContent: 'center', margin: '30px' }} />
              <List sx={{ paddingTop: 0 }}>
                <MenuList
                  sx={{ fontSize: 'h3' }}
                  className="menu-list"
                  items={['Something', 'Something', 'Something', 'Something', 'Something', 'Something', 'Something']}
                />
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid>
              <div style={{ borderRadius: '10px', backgroundColor: 'white', height: '200px' }}>
                <Text text="some text here" />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box component="section" sx={{ borderRadius: '10px', backgroundColor: 'white', height: '200px' }}>
              <Text text="calendar goes here" />
              {/* <Calendar /> */}
            </Box>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
