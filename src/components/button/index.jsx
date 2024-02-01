import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme, color }) => ({
  backgroundColor: theme.palette.common.main,
  color: theme.palette.common[color],
  borderRadius: 15,
  fontSize: 16,
  width: '220px',
  marginBottom: '20px',
  backgroundColor: '#1B4242',
  '&:hover': {
    backgroundColor: theme.palette[color],
    backgroundColor: '#1B4242',
  },
}));


const ActionButton = styled(MButton)(({ theme, customColor }) => ({
  backgroundColor: theme.palette.common.main,
  color: theme.palette.comon,
  borderRadius: 10,
  fontSize: 25,
  width: '180px',
}));

const Button = ({ text, onClick, color }) => {
  const styledComponent = customStyle ? ActionButton : StyledButton;

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