import React from 'react';
import './App.css';
import RegisterInterest from './components/RegisterInterest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome. Has someone ever been mean to you?
        </p>
        <RegisterInterest />
      </header>
    </div>
  );
}

export default App;
