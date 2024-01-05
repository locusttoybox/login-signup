import React, {useState} from 'react';
import LoginSignupBase from './LoginSignupBase';

const Signup = () => {
    const [action, setAction] = useState('Sign up');

    const handleActionChange = (newAction) => {
        setAction(newAction);
      };

    return <LoginSignupBase action={action} onActionChange={handleActionChange} />
    
}

export default Signup;