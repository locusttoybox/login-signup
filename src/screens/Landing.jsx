import React from 'react';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';

import Title from '../components/typography';

const Landing = () => {
    return (
        <Container>
            <Grid container>
                <div className="title">
                    <Title text='Welcome to your namday app' size='h1' />   
                </div>
                <div className="subtitle">
                    <Title text='Some text here' size='h4'/>
                </div>
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