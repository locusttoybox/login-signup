import React from 'react';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import '../index.css';

import Title from '../components/typography';
import Button from '../components/button';
import Navbar from '../components/navbar';


const Landing = () => {
    const navTitle = <Title text='Welcome' size='h4'/>

    return (
        <Container>
             <AppBar position='static'>
                <Navbar title={navTitle}/>
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