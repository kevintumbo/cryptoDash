import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Welcome from './WelcomeMessage';
import {AppProvider} from './AppProvider';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Welcome name="CryptoDash" />
      </AppProvider> 
    </AppLayout>
  );
}

export default App;
