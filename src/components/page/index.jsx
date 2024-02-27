import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const Page = ({ children, AppBarComponent }) => {
  return (
    <>
      {AppBarComponent && <AppBarComponent />}
      <Container>{children}</Container>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  AppBarComponent: PropTypes.elementType,
};

export default Page;
