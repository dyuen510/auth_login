import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const UserInfo = () => {
    // by adding isAuthenticated it will only render if user is logged in
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <img src = {user.picture} alt = {user.name}/>
            <h2> {user.name } </h2>
            <p> {user.email } </p>
        </div>
        )
    )
}

export default UserInfo;
// {JSON.stringify(user, null, 2)}
// the json for seeing all the user data, also consists of the unique identifier for users
// if you want the json to be presented nicely npm install react-json-pretty