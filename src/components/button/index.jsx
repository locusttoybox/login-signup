import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.main,
  color: theme.palette.common,
  borderRadius: 15,
  fontSize: 16,
  width: '220px',
  marginBottom: '20px',
  '&:before' : {
    backgroundColor: theme.palette,
    color: '#1B4242',
  },
  '&:hover': {
    backgroundColor: theme.palette,
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