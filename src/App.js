import React from 'react';
import './App.css';
import LoginButton from './components/Auth/LoginButton';
import LogoutButton from './components/Auth/LogoutButton';


function App() {
  return (
    <div>
        <LoginButton />
        <LogoutButton />
    </div>
  );
}

export default App;
