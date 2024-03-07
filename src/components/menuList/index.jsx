import React from 'react';
import { styled } from '@mui/material';
import { MenuList as MMenuList, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import MenuItem from '../menuItem';

const StyledMenuList = styled(MMenuList)(({ theme, fontSize }) => ({
  color: theme.palette.primary,
  paddingTop: 0,
  fontSize: fontSize || theme.typography.h3.fontSize,
}));

const MenuList = ({ items = [], fontSize, className }) => {
  return (
    <StyledMenuList className={className} fontSize={fontSize}>
      {items.map((item, index) => (
        <MenuItem key={index}>
          <ListItemText primary={item} />
        </MenuItem>
      ))}
    </StyledMenuList>
  );
};

MenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  fontSize: PropTypes.string,
  className: PropTypes.string,
};

export default MenuList;
