import React, { useState } from 'react'; 
import './App.css';
import Container from './screens/Container';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Landing from './screens/Landing';

import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#092635',
    },
    secondary: {
      main: '#1B4242',
    },
    common :{
      main: '#9EC8B9',
    }
  },
  typography: {
    h1 : {
      fontSize: 80,
      marginRight: 75,
      fontFamily: 'DM Sans',
      marginBottom: '32px',
      fontWeight: 500,
      letterSpacing: 2,
    },

    h2 : {
      fontSize: 32,
      color: '#F5EEE6',
      
      fontWeight: 'bold',
      letterSpacing: 1,
    },

    h3 : {
      fontSize: 24,
      fontFamily: 'DM Sans',
    },

    h4 : {
      fontSize: 16,
      color: '#F5EEE6',
      fontFamily: 'Roboto',
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
      <Landing />
    {/* <div>
      <Container>
        {action === 'Login' ? (
          <Login onActionChange={handleActionChange} action={action} />
        ) : (
          <Signup onActionChange={handleActionChange} action={action} />
        )}
     </Container>
    </div> */}
    </ThemeProvider>
  );
}

export default App;
