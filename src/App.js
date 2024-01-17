import React, { useState } from 'react'; 
import './App.css';
import Container from './screens/Container';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5EEE6',
    },
    secondary: {
      main: '#1B4242',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1 : {
      fontSize: 96,
      marginRight: 60,
    },
    h4 : {
      fontSize: 32,
      color: '#F5EEE6',
    },
  }
});

function App() {
  const [action, setAction] = useState('Login');

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Container>
        {action === 'Login' ? (
          <Login onActionChange={handleActionChange} action={action} />
        ) : (
          <Signup onActionChange={handleActionChange} action={action} />
        )}
     </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
