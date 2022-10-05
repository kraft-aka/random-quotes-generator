import React from 'react'
import GetQuotes from './components/GetQuotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id='app-header'>Get a random quote</h1>
      <GetQuotes />
    </div>
  );
}

export default App;
