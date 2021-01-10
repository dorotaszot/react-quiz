import React, { useState } from 'react';
import './App.css';


function App() {
  const questions = [
    {
      questionText: 'What is the capital of the USA?',
      answerOptions: [
        { answerText: 'Washington', isCorrect: true },
        { answerText: 'New York', isCorrect: false },
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

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const handleAnswerBtnClick = () => {
    const nextQuestionNumber = currentQuestionNumber +1;
    setCurrentQuestionNumber(nextQuestionNumber);
  }

  // const handleAnswerBtnClick = () => {
  //   currentQuestion = currentQuestion + 1;
  // }

  return (
    <div className="App">
      <div className="card">
        <h2 className="question-count">Question {currentQuestionNumber}/{questions.length}</h2>
        <h3 className="question-text">{questions[currentQuestionNumber].questionText}</h3>
      </div>
      <div className="answers-wrapper">
        {questions[currentQuestionNumber].answerOptions.map((answerOption) => 
          <button onClick={() => handleAnswerBtnClick()}>{answerOption.answerText}</button>
        )
        }
      </div>
    </div>
  );
}

export default App;
