import { styled } from '@mui/material';
import { Toolbar as MToolbar } from '@mui/material';

const StyledToolbar = styled(MToolbar)(({ theme} ) => ({
    backgroundColor: 'transparent',
    '& *': {
        color: '#fff', 
      },
}),
);

const Navbar = ({ text, size }) => {
    return (
        <StyledToolbar variant={size}>
            {text}
        </StyledToolbar>
    )
};

export default Navbar;
