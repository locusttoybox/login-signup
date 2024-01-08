// import React, {useState} from 'react';
// import LoginSignupBase from './LoginSignupBase';

// const Signup = () => {
//     const [action, setAction] = useState('Sign up');

//     const handleActionChange = (newAction) => {
//         setAction(newAction);
//       };

//     return <LoginSignupBase action={action} onActionChange={handleActionChange} />
    
// }

// export default Signup;

import React from 'react';
import { TextField, Typography, Link, InputAdornment } from '@mui/material';
import Button from '../components/button';
import buttonStyles from '../styles/buttonStyles';

import usertIcon from '../assets/user.png';
import emailIcon from '../assets/mail.png';
import { Password } from '@mui/icons-material';
