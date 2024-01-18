import React from 'react';
import {InputAdornment, styled} from '@mui/material';
import {TextField as MInput} from '@mui/material';

const StyledInput = styled(MInput)(({theme}) => ({
  '& .MuiInputBase-root': {
    color: theme.palette.secondary,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.secondary,
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#fff',
  },
  '& .MuiInputAdornment-root img': {
    width: 20,
    height: 20,
  },
}));

const Input = ({size, icon, ...props}) => {
  return (
    <StyledInput
      {...props}
      type="text"
      name=""
      id=""
      variant="filled"
      fullWidth={true}
      size={size}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={icon} alt="Icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
