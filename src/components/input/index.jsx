import React from 'react';
import { InputAdornment, styled } from '@mui/material';
import { TextField as MInput } from '@mui/material';

const StyledInput = styled(MInput)(({theme}) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.secondary,
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#F5EEE6',
    borderRadius: '10px',
    '&:before, &:after, &:hover:before, &:focus:before, &Mui:active': {
      borderBottom: 'none',
   },
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
      style={{ marginTop: '15px' }}
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
