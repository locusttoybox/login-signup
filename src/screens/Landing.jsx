import React from 'react';
import { Container, Grid } from '@mui/material';

import Title from '../components/typography';

const Landing = () => {
    return (
        <Container>
            <Grid conatiner className='title' item sm={12} md={6} style={{ justifyContent: 'center' }}>
                <Title text='Welcome to your nameday app' size='h1' />
            </Grid>
            <Grid container className='subtile' item sm={12} md={6}>

            </Grid>
        </Container>

    )
}

export default Landing;