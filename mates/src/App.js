
import './App.css';
import Quiz from "./components/Quiz";
import Login from "./components/Login";
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is the capital of Italy?',
    options: ['Paris', 'Rome', 'Madrid', 'Amsterdam'],
    answer: 'Rome'
  }
];
function App() {
  return (
    <div className="App">
 <Login />
    </div>
  );
}

export default App;
