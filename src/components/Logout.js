import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Button from './Button/Button';

const Logout = () => {
    const { logout } = useAuth0();
    return (
        <Button 
            title="Log Out"
            onClick={() => logout({
            returnTo: window.location.origin,
            })
            } 
            color="default"
        />
    )
}


export default Logout;