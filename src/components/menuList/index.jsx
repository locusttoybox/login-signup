import React from 'react';
import { styled } from '@mui/material';
import { MenuList as MMenuList, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import MenuItem from '../menuItem';

const StyledMenuList = styled(MMenuList)(({ theme }) => ({
  color: theme.palette.primary,
}));

const MenuList = ({ items = [] }) => {
  return (
    <StyledMenuList>
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
};

export default MenuList;
