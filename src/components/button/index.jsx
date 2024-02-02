import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme, textColor, small }) => ({
  backgroundColor: theme.palette.common.main,
  color: theme.palette.common[textColor],
  borderRadius: small ? 10 : 15,
  fontSize: small ? 12 : 16,
  width: small ? '180px' : '220px',
  marginBottom: '20px',
  backgroundColor: '#1B4242',
  '&:hover': {
    backgroundColor: theme.palette[textColor],
    backgroundColor: '#1B4242',
  },
}));

const Button = ({ text, onClick, textColor, small }) => {

  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      textColor={textColor}
      small={small}
    >
      {text}
    </StyledButton>
  );
};

export default Button;