import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import UserData from './features/user-data/user-data';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Counter">
          <p>
            {counter}
          </p>
          <button onClick={() => {
            setCounter(counter + 1);
          }}>
            Increment Counter
          </button>
        </div>
        <UserData></UserData>
      </header>
    </div>
  );
}

export default App;
