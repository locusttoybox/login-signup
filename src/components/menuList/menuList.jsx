import React from 'react';
import { styled } from '@mui/material';
import { MenuList as MMenuList } from '@mui/material';
import PropTypes from 'prop-types';

const StyledMenuList = styled(MMenuList)(({ theme }) => ({
  color: theme.palette.common,
}));

const MenuList = ({ text }) => {
  return <StyledMenuList text={text}></StyledMenuList>;
};

MenuList.propTypes = {
  text: PropTypes.string,
};

export default MenuList;
