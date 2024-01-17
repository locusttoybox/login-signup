import React from 'react';
import { InputAdornment, styled } from '@mui/material';
import { TextField as MInputs } from '@mui/material';
import { Grid } from '@mui/material'; 


const StyledInputs = styled(MInputs)(({ theme }) => ({
    color: theme.palette.secondary.main,
  
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  }));


  const Inputs = ({ size, icon }) => {


    return (
        <Grid item xs={12} md={6} style={{ gap: '25px' }}>
            <StyledInputs type='text' name=''id='' variant='filled' fullWidth={true} size={size} 
            InputProps= {{
                startAdornment: (
                    <InputAdornment position='start'>
                        <img src={icon} alt="Icon" style={{ width: 20, height: 20}} />
                    </InputAdornment>
                )
            }} />
        </Grid>
    )
  };



export default Inputs;