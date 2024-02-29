import React from 'react';
import { styled } from '@mui/material';
import { MenuList as MMenuList } from '@mui/material';

const StyledMenuList = styled(MMenuList)(({ theme }) => ({
  color: theme.palette.common,
}));

const MenuList = () => {
  return <StyledMenuList></StyledMenuList>;
};

export default MenuList;
