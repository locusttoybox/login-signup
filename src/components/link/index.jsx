import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';

import { Link as MLink } from '@mui/material';

const StyledLink = styled(MLink)(({ theme, large }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  fontSize: large ? 24 : 16,
  fontFamily: 'Roboto',
}));

const Link = ({ text, large, href }) => {
  return (
    <StyledLink href={href} large={large}>
      {text}
    </StyledLink>
  );
};

Link.propTypes = {
  text: PropTypes.string,
  large: PropTypes.bool,
  href: PropTypes.string,
};

export default Link;
