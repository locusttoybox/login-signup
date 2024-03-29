import React from 'react';
import { Grid, List, Box } from '@mui/material';
import MyAppBar from '../components/navbar';
import Page from '../components/page';
import Text from '../components/typography';
import MenuList from '../components/menuList';
import Link from '../components/link';
import Avatar from '../components/userAvatar';
import '../components/styles.css';
import profileImage from '../assets/profileImage.jpeg';

import Calendar from '../components/calendar';

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
              <div>
                <Text text="Welcome" size="h3" />
              </div>
              <div className="user-name">
                <Text text="Rhea von Tree" size="h3" />
              </div>
              {/* <Avatar src={profileImage} alt="" sx={{ height: '150px', width: '150px', marginBottom: '10px' }} /> */}
              <div className="avatar-img">
                <Avatar src={profileImage} alt="" />
              </div>

              <Link href="user-profile" text="rhea.von.tree@gmail.com" large={false} marginBottom={true} />
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
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <div style={{ borderRadius: '10px', backgroundColor: 'white', height: '200px' }}>
                  <Text text="some text here" />
                </div>
              </Grid>
              <Grid item container direction="row" spacing={2} xs={12}>
                <Grid item xs={12} sm={6} md={4}>
                  <div className="text-container">
                    <Text text="Namedays" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className="text-container">
                    <Text text="Birthdays" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className="text-container">
                    <Text text="Anniversaries" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <div className="sub-text">
              <Text text="Gift Ideas" size="h3" />
            </div>
            <Grid item container direction="row" spacing={2} xs={12}>
              <Grid item xs={12} sm={6} md={6}>
                <div className="gift-container">
                  <Text text="Flowers" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className="gift-container">
                  <Text text="Gifts" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className="gift-container">
                  <Text text="Gifts" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className="gift-container">
                  <Text text="Gifts" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Calendar />
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Dashboard;
