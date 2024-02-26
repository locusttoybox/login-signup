import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ErrorPage from './screens/ErrorPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './components/app/store';
import { Provider } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C8374',
    },
    secondary: {
      main: '#1B4242',
    },
    common: {
      main: '#9EC8B9',
      light: '#A87C7C',
      dark: 'black',
    },
  },
  typography: {
    h1: {
      fontSize: 80,
      marginRight: 75,
      fontFamily: 'DM Sans',
      fontWeight: 600,
      letterSpacing: 2,
      color: '#1B4242',
    },

    h2: {
      fontSize: 32,
      color: '#F5EEE6',
      fontFamily: 'DM Sans',
      fontWeight: 400,
      letterSpacing: 1,
    },

    h3: {
      fontSize: 24,
      fontFamily: 'DM Sans',
    },

    h4: {
      fontSize: 16,
      color: '#F5EEE6',
      fontFamily: 'Roboto',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
  },

  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: 'sign-up',
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
