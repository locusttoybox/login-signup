import { styled } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography as MTypography } from '@mui/material';

const StyledTypography = styled(MTypography)(({ theme }) => ({
  color: '#1B4242',

  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
}));

const Title = ({ text, size }) => {
  return <StyledTypography variant={size}>{text}</StyledTypography>;
};

Title.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

export default Title;
