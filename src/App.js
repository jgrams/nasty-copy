import React from 'react';
import './App.css';
import './css/flowers.css';
import './css/cards.css';
import './css/interest-form.css'
import RegisterInterest from './components/RegisterInterest';
import InteractivePanel from './components/InteractivePanel';
import FlowerBar from './components/FlowerBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InteractivePanel />
        <FlowerBar />
        <RegisterInterest />
      </header>
    </div>
  );
}

export default App;
