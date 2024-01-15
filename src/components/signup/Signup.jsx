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
  import { TextField, Typography, InputAdornment } from '@mui/material';
  import Button from '../../components/button';
  import '../../components/styles.css';


  import userIcon from '../../assets/user.png';
  import emailIcon from '../../assets/mail.png';
  import passwordIcon from '../../assets/padlock.png';

  const SignUp = ({ onActionChange, action }) => {

    return (
      <><div className="container">
        <div className="header">
          <Typography variant='h4' fontFamily='Roboto' fontWeight='500' color='white' fontSize='32px'>
            Sign up
          </Typography>
        </div>
      </div><div className="inputs">
          {action === 'Login' ? (<div></div>) : (
            <div className="input">
              <TextField
                type="text"
                placeholder='Username'
                name=''
                id=''
                variant='outlined'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={userIcon} alt='' />
                    </InputAdornment>
                  ),
                }} 
                />
            </div>
          )}
          <div className="input">
            <TextField
              type='email'
              placeholder='Email'
              name=''
              id=''
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={emailIcon} alt="" />
                  </InputAdornment>
                )
              }} 
              />
          </div>
          <div className="input">
            <TextField
              type='password'
              placeholder='Password'
              name=''
              id=''
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={passwordIcon} alt="" />
                  </InputAdornment>
                ),
              }} 
              />
              </div>
            </div>
              <Button
              className={`${action === 'Sign up' ? 'submit' : 'submit gray'}`}
              onClick={() => {
                onActionChange('Login');
              }}
              text={'Login'}
            />
          </>
    );
  };

  export default SignUp;
