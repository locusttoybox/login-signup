import React from 'react';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import '../index.css';

import Title from '../components/typography';


const Landing = () => {
    return (
        <Container>
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



                </Grid>
            </Grid>
        </Container>


        // <AppBar position='static'>
        //     <Toolbar>
        //         <Title text='Welcome' size='h4'/>
        //     </Toolbar>
        // </AppBar>
    );
};

export default Landing;