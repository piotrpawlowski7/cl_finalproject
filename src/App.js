import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}

        <a
          className="App-link font-test"
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
