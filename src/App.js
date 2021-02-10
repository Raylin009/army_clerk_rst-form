import logo from './logo.svg';
import './App.css';

function RSTQuestionFrom() {
  return (
    <div>
      <h1>Question 1</h1>
      <h1>Question 2</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <RSTQuestionFrom />
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
