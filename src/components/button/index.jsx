import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common,
  borderRadius: 15,
  fontSize: 16,
  '&:before' : {
    backgroundColor: theme.palette.primary.light,
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary,
    backgroundColor: '#1B4242',
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