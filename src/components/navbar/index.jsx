import { styled } from '@mui/material';
import { Toolbar as MToolbar } from '@mui/material';

const StyledToolbar = styled(MToolbar)(({ theme} ) => ({
    backgroundColor: 'transparent',
    '& *': {
        color: '#fff', 
      },
}),
);

const Navbar = ({ children, size }) => {
    return (
        <StyledToolbar variant={size} >
            { children }
        </StyledToolbar>
    )
};

export default Navbar;
