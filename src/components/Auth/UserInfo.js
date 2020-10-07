import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserInfo = () => {
    // by adding isAuthenticated it will only render if user is logged in
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <img src = {user.picture} alt = {user.name}/>
            <h2> {user.name } </h2>
            <p> {user.email } </p>
            {JSON.stringify(user, null, 2)}
        </div>
        )
    )
}

export default UserInfo;

// if you want the json to be presented nicely npm install react-json-pretty