import React from 'react';
import './App.css';

import { Header } from './components/Header'
import { Toolbar } from './components/Toolbar';
import MainContent from './containers/MainContent';

function App() {
  return (
      <div className="container-sm">
        <Header />
        <Toolbar />
        <MainContent />
      </div>
  )
}


export default App;
