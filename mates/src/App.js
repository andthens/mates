
import './App.css';
import Quiz from "./components/Quiz";

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
 <Quiz questions={questions} />
    </div>
  );
}

export default App;
