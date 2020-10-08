import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Button from './Button/Button';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button 
            title="Log In"
            onClick={() => loginWithRedirect()}
            color="primary"
        />
    )
}

export default Login;