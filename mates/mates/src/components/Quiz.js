import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0 && currentQuestion < questions.length) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer, currentQuestion, questions.length]);

  useEffect(() => {
    if (timer === 0 || showAnswer) {
      const timeoutId = setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setShowAnswer(false);
        setTimer(5);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [timer, showAnswer, currentQuestion, setCurrentQuestion]);

  const handleOptionClick = (selectedOption) => {
    setShowAnswer(true);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowAnswer(false);
    setTimer(5);

  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <div className="question-card">
            <h3>{questions[currentQuestion].question}</h3>
            <p>Time left: {timer} seconds</p>
          </div>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option-container">
              <button className="option-button" onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="result-container">
          <div className="result-card">
            <h3>Your score is {score} out of {questions.length}</h3>
          </div>
        </div>
      )}
      {showAnswer && (
        <div className="answer-container">
          <div className="answer-card">
            <p>
              The correct answer is: {questions[currentQuestion].answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
