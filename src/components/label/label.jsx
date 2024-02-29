import React from 'react';
import { styled } from '@mui/material';
import { FormControlLabel as MLabel } from '@mui/material';

const StyledLabel = styled(MLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
  gap: '10px',
  marginLeft: '10px',
}));

const Label = ({ control, label }) => {
  return <StyledLabel control={control} label={label} />;
};

Label.propTypes = {};

export default Label;
