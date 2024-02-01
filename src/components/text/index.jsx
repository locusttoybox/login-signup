import { styled } from '@mui/material';
import { Typography as MTypography } from '@mui/material';


const StyledTypography = styled(MTypography)(({ theme }) => ({
    color: theme.palette.secondary.main,
  
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  }));

  const Text = ({ text, size }) => {


    return (
    <StyledTypography>
        {text}
        {size}
     </StyledTypography>
    )
  };



export default Text;