import React from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import './Answers.css';

const Answers = ({ possibleAnswers, handleClick }) => {
  const renderedAnswers = possibleAnswers.map((answer, i) => {
      return (
        <AnswerCard 
          className="yellow"
          id={`${answer.answer}_${i}`} 
          handleClick={handleClick} 
          answer={answer}
        />
      )
  })

  return (
    <section className="answer-section">
      {renderedAnswers}
    </section>
  )
}

export default Answers;