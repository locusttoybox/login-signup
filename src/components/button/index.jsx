
import { Button as MButton} from '@mui/material';

const Button = ({text, onClick, main }) => {
    return (
        <MButton
        variant="contained"
        color={main ? 'primary' : 'secondary'}
        onClick= {onClick}
      >
        {text}
      </MButton>
    )
}

export default Button;