import { styled } from '@mui/system';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)(({ theme, textColor, bgColor, small }) => ({
  backgroundColor: theme.palette.common[bgColor],
  color: theme.palette.common[textColor],
  borderRadius: small ? 20 : 15,
  fontSize: small ? 14 : 16,
  width: small ? '90px' : '220px',
  marginBottom: '20px',
  backgroundColor: '#1B4242',
  '&:hover': {
    backgroundColor: theme.palette[textColor],
    backgroundColor: '#1B4242',
  },
}));

const Button = ({ text, onClick, textColor, bgColor, small }) => {

  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      textColor={textColor}
      bgColor={bgColor}
      small={small}
    >
      {text}
    </StyledButton>
  );
};

export default Button;