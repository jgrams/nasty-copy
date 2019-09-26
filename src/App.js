import React from 'react';
import './App.css';
import RegisterInterest from './components/RegisterInterest';
import InteractivePanel from './components/InteractivePanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InteractivePanel />
        <RegisterInterest />
      </header>
    </div>
  );
}

export default App;
