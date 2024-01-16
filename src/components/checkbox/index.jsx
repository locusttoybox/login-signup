import React, { useState } from 'react';
import { styled , ThemeProvider, createTheme} from '@mui/material';
import { Checkbox as MCheckbox } from '@mui/material';

const theme = createTheme();

const StyledCheckbox = styled(MCheckbox)(({ theme }) => ({
    color: 'white',
  
    '&.Mui-checked': {
      color: '#092635',
    },
  }));


  const Checkbox = ({ text }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked);
    };

    return (
      <ThemeProvider theme={theme}>
       <StyledCheckbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Remember me checkbox' }}
      >
      {text}
      </StyledCheckbox>
      </ThemeProvider>
    )
  }

export default Checkbox;