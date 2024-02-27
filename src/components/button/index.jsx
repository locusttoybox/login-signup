import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme, textColor, small, marginBottom }) => ({
  // backgroundColor: theme.palette.common[bgColor],
  color: theme.palette.common[textColor],
  borderRadius: small ? 20 : 15,
  fontSize: small ? 14 : 16,
  width: small ? '90px' : '220px',
  marginBottom: marginBottom,
  backgroundColor: '#1B4242',
  '&:hover': {
    backgroundColor: theme.palette[textColor],
  },
}));

const Button = ({ text, onClick, textColor, bgColor, small, href, marginBottom }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      textColor={textColor}
      bgColor={bgColor}
      small={small}
      href={href}
      marginBottom={marginBottom}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  small: PropTypes.bool,
  href: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default Button;
