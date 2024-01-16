import { styled } from '@mui/material';
import { Link as MLink } from '@mui/material'

const StyledLink = styled(MLink) (({ theme }) => ({
        color: 'red',
        textDecoration: 'none',
}))

const Link = ({ text }) => {
        return (
        <StyledLink href='#'>
         {text}
        </StyledLink>
        )               
}

export default Link;
