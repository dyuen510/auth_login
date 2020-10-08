import React from 'react';
import './App.css';

import { useAuth0 } from  '@auth0/auth0-react';

import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  const {isLoading} = useAuth0();

  if(isLoading) return <h2>Loading....</h2>
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
