import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Welcome from './WelcomeMessage';

function App() {
  return (
    <AppLayout>
      <AppBar />
      <Welcome name="CryptoDash" />
    </AppLayout>
  );
}

export default App;
