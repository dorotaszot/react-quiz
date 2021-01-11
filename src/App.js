import React, { useState } from 'react';
import './App.css';


function App() {
  const questions = [
    {
      questionText: 'What is the capital of the USA?',
      answerOptions: [
        { answerText: 'Washington', isCorrect: false },
        { answerText: 'New York', isCorrect: true },
        { answerText: 'Chicago', isCorrect: false },
        { answerText: 'Los Angeles', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the capital of Spain?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Madrid', isCorrect: true },
        { answerText: 'London', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the capital of Brazil?',
      answerOptions: [
        { answerText: 'Sao Paulo', isCorrect: false },
        { answerText: 'Brasilia', isCorrect: true },
        { answerText: 'Rio de Janeiro', isCorrect: false },
        { answerText: 'Fortaleza', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the capital of Argentina?',
      answerOptions: [
        { answerText: 'Cordoba', isCorrect: false },
        { answerText: 'La Plata', isCorrect: false },
        { answerText: 'Mendoza', isCorrect: false },
        { answerText: 'Buenos Aires', isCorrect: true },
      ]
    },
    {
      questionText: 'What is the capital of India?',
      answerOptions: [
        { answerText: 'Mumbai', isCorrect: false },
        { answerText: 'Delhi', isCorrect: true },
        { answerText: 'Bangalore', isCorrect: false },
        { answerText: 'Kolkata', isCorrect: false },
      ]
    }
  ];

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [bgColor, setBgColor] = useState();


  const handleAnswerBtnClick = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);      
    }
    
    const nextQuestionNumber = currentQuestionNumber +1;
    if(nextQuestionNumber < questions.length) {
      // setTimeout(() => {
        setCurrentQuestionNumber(nextQuestionNumber);
      // }, 2000);
      
    } else {
      setShowScore(true);
    };
  };
  console.log(score);

  const tryAgainBtn = () => {
    setCurrentQuestionNumber(0);
    setScore(0);
    setShowScore(false);
  }
 
  return (
    <div className="App">
      {showScore ? (
        <div className="card final-score-card">
          <h2 className="final-score">You scored {score} out of {questions.length}</h2>
          <button className='try-again-btn' onClick={() => tryAgainBtn()}>Try again</button>
        </div>
      ) : (
        <div className="card">
          <div className="question-part">
            <h2 className="question-count">Question {currentQuestionNumber}/{questions.length}</h2>
            <h3 className="question-text">{questions[currentQuestionNumber].questionText}</h3>
          </div>
          <div className="answers-wrapper">
            {questions[currentQuestionNumber].answerOptions.map((answerOption) => 
              <button onClick={() => handleAnswerBtnClick(answerOption.isCorrect)}>{answerOption.answerText} </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default App;
