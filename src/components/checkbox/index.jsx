import { styled } from '@mui/material';
import MCheckbox from '@mui/material/Checkbox';

const Checkbox = styled(MCheckbox)(({ theme }) => ({
    color: 'white',
  
    '&.Mui-checked': {
      color: '#092635',
    },
  }));

export default Checkbox;  