import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, styled } from '@mui/material';
import { TextField as MInput } from '@mui/material';

const StyledInput = styled(MInput)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.secondary,
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#F5EEE6',
    borderRadius: '10px',
    '&::before': {
      borderBottom: '40px',
    },
  },
  '& .MuiInputAdornment-root img': {
    height: 18,
    paddingRight: '10px',
  },
}));

const Input = ({ size, icon, ...props }) => {
  return (
    <StyledInput
      {...props}
      type="text"
      name=""
      id=""
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

Input.propTypes = {
  size: PropTypes.bool,
  icon: PropTypes.object,
};

export default Input;
