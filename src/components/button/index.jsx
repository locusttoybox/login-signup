
import { Button as MButton} from '@mui/material';

const Button = ({text, onClick, main }) => {
    return (
      <MButton
        variant="contained"
        color={main ? 'primary' : 'secondary'}
        onClick= {onClick}
        sx={{
          backgroundColor: main ? '#092635' : '#1B4242',
          borderRadius: '20px,'
        }}
      >
        {text}
      </MButton>
    )
}

export default Button;