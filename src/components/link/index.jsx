import { styled } from '@mui/material';
import { Link as MLink } from '@mui/material'

const StyledLink = styled(MLink) (({ theme }) => ({
        color: theme.palette.secondary.main,
        color: '#092635',
        textDecoration: 'none',
        fontSize: 16,
        fontFamily: 'Roboto',
        
}))

const Link = ({ text }) => {
        return (
        <StyledLink href='#'>
         {text}
        </StyledLink>
        )               
}

export default Link;
