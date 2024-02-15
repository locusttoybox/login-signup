import React from 'react';
import { Container } from '@mui/material';

const Page = ({ children, AppBarComponent }) => {
  return (
    <>
      {AppBarComponent && <AppBarComponent />}
      <Container>{children}</Container>
    </>
  );
};

export default Page;
