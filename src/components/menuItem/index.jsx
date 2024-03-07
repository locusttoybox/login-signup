import React from 'react';
import { styled } from '@mui/material';
import { MenuItem as MMenuItem } from '@mui/material';
import PropTypes from 'prop-types';

const StyledMenuItem = styled(MMenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const MenuItem = ({ children, ...props }) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
};

MenuItem.propTypes = {
  children: PropTypes.node,
};

export default MenuItem;
