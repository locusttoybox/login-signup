import { styled } from '@mui/material';
import { TextField as MTextInputs } from '@mui/material';


const StyledTextInputs = styled(MTextInputs)(({ theme }) => ({
    color: theme.palette.secondary.main,
  
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  }));

  const TextInputs = ({ text, size }) => {


    return (
    <StyledTextInputs variant={size}>
        {text}
     </StyledTextInputs>
    )
  };



export default TextInputs;