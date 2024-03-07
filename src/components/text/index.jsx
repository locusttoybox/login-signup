import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { Typography as MTypography } from '@mui/material';

const StyledTypography = styled(MTypography)(({ theme, fontSize, style }) => ({
  color: theme.palette.secondary.main,
  ...style,

  '&.Mui-checked': {
    color: theme.palette.secondary.main,
    fontSize: fontSize,
  },
}));

const Text = ({ text, fontSize, style }) => {
  return (
    <StyledTypography>
      {text}
      {fontSize}
      {style}
    </StyledTypography>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.bool,
  style: PropTypes.object,
};

export default Text;
