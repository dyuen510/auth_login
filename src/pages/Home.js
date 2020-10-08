import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

import User from '../components/User';
const Home = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(user);
    return(
        <div>
            <h1>hello Home</h1>
            {user && 
                <User name={user.name} />
            }

        </div>
    )
}

export default Home;