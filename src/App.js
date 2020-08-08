import React from 'react';
import logo from './logo.svg';
import './App.css';
function abrirDealer(){

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id="txtIdImg" />
        <p>
          Edit <code>Hola mundo</code> and save to reload.
        </p>
        <button className="botonComprarFaso" onclick="abrirDealer" >Comprar faso</button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
