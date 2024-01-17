import React from 'react';
import { InputAdornment, styled } from '@mui/material';
import { TextField as MTextInputs } from '@mui/material';
import { Grid } from '@mui/material'; 


const StyledTextInputs = styled(MTextInputs)(({ theme }) => ({
    color: theme.palette.secondary.main,
  
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  }));


  const TextInputs = ({ size }) => {


    return (
        <Grid item xs={12} md={6}>
            <StyledTextInputs type='text' name=''id='' variant='filled' fullWidth={true} size={size} 
             />
        </Grid>
    )
  };



export default TextInputs;