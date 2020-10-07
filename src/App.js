import React from 'react';
import './App.css';
import LoginButton from './components/Auth/LoginButton';
import LogoutButton from './components/Auth/LogoutButton';
import UserInfo from './components/Auth/UserInfo';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div className ='log'>
        <LoginButton />
        <LogoutButton />
        </div>
        <UserInfo />
    </div>
  );
}

export default App;
