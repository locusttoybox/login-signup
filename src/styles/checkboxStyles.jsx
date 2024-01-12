import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'white',
  
    '&.Mui-checked': {
      color: '#092635',
    },
  }));

export default StyledCheckbox;