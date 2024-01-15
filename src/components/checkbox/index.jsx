import { styled } from '@mui/material';
import { Checkbox as MCheckbox } from '@mui/material';

const StyledCheckbox = styled(MCheckbox)(({ theme }) => ({
    color: 'white',
  
    '&.Mui-checked': {
      color: '#092635',
    },
  }));

  const Checkbox = ({ text }) => {
    return (
      <StyledCheckbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    >
      {text}
      </StyledCheckbox>
    )
  }

export default Checkbox;