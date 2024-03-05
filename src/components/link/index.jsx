import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';

import { Link as MLink } from '@mui/material';

const StyledLink = styled(MLink)(({ theme, large, marginBottom }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  fontSize: large ? 24 : 16,
  fontFamily: 'Roboto',
  marginBottom: marginBottom ? '30px' : 0,
}));

const Link = ({ text, large, href, marginBottom }) => {
  return (
    <StyledLink href={href} large={large} marginBottom={marginBottom}>
      {text}
    </StyledLink>
  );
};

Link.propTypes = {
  text: PropTypes.string,
  large: PropTypes.bool,
  href: PropTypes.string,
  marginBottom: PropTypes.bool,
};

export default Link;
