import React, { useState } from 'react';
import { styled } from '@mui/material';
import { Checkbox as MCheckbox } from '@mui/material';




const StyledCheckbox = styled(MCheckbox)(({ theme }) => ({
    color: theme.palette.main,
    color: '#1B4242',
    paddingLeft: '0',
  
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  }));
  


  const Checkbox = ({ text }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked);
    };

    return (
       <StyledCheckbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Remember me checkbox' }}
      >
      {text}
      </StyledCheckbox>
    )
  }

export default Checkbox;