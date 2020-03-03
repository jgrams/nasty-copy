import React from 'react';
import './App.css';
import './css/flowers.css';
import './css/cards.css';
import './css/interest-form.css'
import './css/flex.css'
import RegisterInterest from './components/RegisterInterest';
import InteractivePanel from './components/InteractivePanel';
import FlowerBar from './components/FlowerBar';

function App() {
  return (
    <div className="App">
        <InteractivePanel />
        <FlowerBar />
        <RegisterInterest />
    </div>
  );
}

export default App;
