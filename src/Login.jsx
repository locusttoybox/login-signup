import React, { useState } from 'react';
import LoginSignupBase from './LoginSignupBase';

const Login = () => {
    const [action, setAction] = useState('Login');

    return <LoginSignupBase action={action} onActionChange={setAction} />
}

export default Login;
