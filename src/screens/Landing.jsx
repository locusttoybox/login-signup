import React from 'react';
import { Container, Toolbar, AppBar, Grid } from '@mui/material';
import '../index.css';

import Title from '../components/typography';
import Button from '../components/button';
import Navbar from '../components/navbar';


const Landing = () => {


    return (
        <Container>
            <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Navbar>
                        <div className="nav-button">
                            <Button text='About' />
                            <Button text='Contact'/>
                            <Button text='Login'/>
                        </div>
                    </Navbar>
                </Toolbar>
            </AppBar>

            <Grid container alignItems='center' height='100vh'>
                <Grid item sx={12} md={8}>
                 <div className="container">
                    <div className="title">
                        <Title text='Welcome to your namday app' size='h1' />   
                    </div>
                    <div className='subtitle'>
                        <Title text='Short discription about app and features' size='h3' />
                    </div>
                </div>
                <Button text='Enter' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Landing;