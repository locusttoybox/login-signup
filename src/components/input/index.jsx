import React from 'react';
import {InputAdornment, styled} from '@mui/material';
import {TextField as MInput} from '@mui/material';

const StyledInput = styled(MInput)(({theme}) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.secondary,
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#F5EEE6',
    radius: '20px,',
  },
  '& .MuiInputAdornment-root img': {
    width: 20,
    height: 20,
    marginBottom: "15px",
  },
}));

const Input = ({size, icon, ...props }) => {
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
