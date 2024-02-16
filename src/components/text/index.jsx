import React from 'react';
import { styled } from '@mui/material';
import { Typography as MTypography } from '@mui/material';

const StyledTypography = styled(MTypography)(({ theme, fontSize }) => ({
  color: theme.palette.secondary.main,

  '&.Mui-checked': {
    color: theme.palette.secondary.main,
    fontSize: fontSize,
  },
}));

const Text = ({ text, fontSize }) => {
  return (
    <StyledTypography>
      {text}
      {fontSize}
    </StyledTypography>
  );
};

export default Text;
