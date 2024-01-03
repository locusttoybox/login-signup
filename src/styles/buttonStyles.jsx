import { styled } from '@mui/system';
import { Button } from '@mui/material';

const primary = {
  main: '#C69774',
  light: '#F8DFD4',
};


const buttonStyles = styled((Button) => ({
  root: {
    borderRadius: '4px',
    border: '0',
  },
}));



export default { buttonStyles, primary };