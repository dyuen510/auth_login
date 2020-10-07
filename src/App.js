import React from 'react';
import './App.css';
import LoginButton from './components/Auth/LoginButton';
import LogoutButton from './components/Auth/LogoutButton';
import UserInfo from './components/Auth/UserInfo';


function App() {
  return (
    <div>
        <LoginButton />
        <LogoutButton />
        <UserInfo />
    </div>
  );
}

export default App;
