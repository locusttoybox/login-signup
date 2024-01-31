import React, { useState } from 'react'; 
import './App.css';
import Container from './screens/Container';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './screens/Dashboard';
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
      fontSize: 76,
      marginRight: 75,
      fontFamily: 'Montserrat',
      marginBottom: '32px',
    },

    h2 : {
      fontSize: 32,
      color: '#F5EEE6',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      letterSpacing: 1,
    },

    h3 : {
      fontSize: 24,
      fontFamily: 'Roboto',
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
    <div>

    <Landing/>

      {/* <Dashboard /> */}
      {/* <Container>
        {action === 'Login' ? (
          <Login onActionChange={handleActionChange} action={action} />
        ) : (
          <Signup onActionChange={handleActionChange} action={action} />
        )}
     </Container> */}


    </div>
    </ThemeProvider>
  );
}

export default App;
