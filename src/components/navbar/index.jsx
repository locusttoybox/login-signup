import React from 'react';
import { styled } from '@mui/material';
import { AppBar, Box } from '@mui/material';
import { Toolbar as MToolbar } from '@mui/material';

import Button from '../button';
import Link from '../link';

const StyledToolbar = styled(MToolbar)(({ theme }) => ({
  backgroundColor: 'transparent',
  '& *': {
    color: '#fff',
  },
  '&.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular': {
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginTop: '10px',
  },
}));

const Navbar = ({ children, size }) => {
  return <StyledToolbar variant={size}>{children}</StyledToolbar>;
};

const MyAppBar = () => {
  return (
    <AppBar
      className="app-bar"
      position="static"
      style={{ background: 'transparent', boxShadow: 'none', width: '100%' }}
    >
      <Navbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="nav-links">
            <Link text="About" />
            <Link text="Contact" />
            <Link text="Something" />
          </div>
        </Box>
        <Button href="login" text="Login" small bgColor="light" style={{ marginBottom: '0' }} />
      </Navbar>
    </AppBar>
  );
};

export default MyAppBar;
