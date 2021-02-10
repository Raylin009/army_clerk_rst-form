import logo from './logo.svg';
import './App.css';
import Question from './Components/QuestionCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Question />
      </header>
    </div>
  );
}

export default App;
