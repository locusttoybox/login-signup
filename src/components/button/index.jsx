import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Button = ({ text, onClick }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;