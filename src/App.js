import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id="txtIdImg" />
        <p>
          Edit <code>Hola mundo</code> and save to reload.
        </p>
        <button className="botonComprarFaso" onClick={() => setCount(count + 100)}>Comprar faso</button>
        <h5>{count} Fasos</h5>
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
