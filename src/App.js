import React from 'react';
import logo from './logo.svg';
import katakuri from './katakuri.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <hr className="App-line"/>
        <img src={katakuri} alt="katakuri" />
        <p className="App-text">
         This is the second checkpoint. <br/> 
          <h2 className="App-h2"> Fighting !! </h2>
        </p>
      </header>
    </div>
  );
}

export default App;
