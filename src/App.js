import React from 'react';
import './App.css';
import './css/flowers.css';
import './css/cards.css';
import './css/interest-form.css'
import './css/flex.css'
import RegisterInterest from './components/RegisterInterest';
import CardContainer from './components/CardContainer';
import FlowerBar from './components/FlowerBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    	<Header />
        <CardContainer />
        <FlowerBar />
        <RegisterInterest />
    </div>
  );
}

export default App;
