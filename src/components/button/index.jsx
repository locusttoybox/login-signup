import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme, color }) => ({
  backgroundColor: theme.palette.common.main,
  color: theme.palette.common[color],
  borderRadius: 15,
  fontSize: 16,
  width: '220px',
  marginBottom: '20px',
  '&:before' : {
    backgroundColor: theme.palette[color],
    color: '#1B4242',
  },
  '&:hover': {
    backgroundColor: theme.palette[color],
    backgroundColor: '#1B4242',
  },
}));

const Button = ({ text, onClick }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      color={color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;