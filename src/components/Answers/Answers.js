import React, { useState, useEffect } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import './Answers.css';

const Answers = ({ 
  possibleAnswers, 
  validateSelection, 
  validStatus 
}) => {

  const changeClass = () => {
    validStatus ? validStatus = '' : validStatus = 'validated';
  }

  const renderedAnswers = possibleAnswers.map((answer, i) => {
      return (
        <AnswerCard 
          id={`${answer.answer}_${i}`} 
          validateSelection={validateSelection} 
          answer={answer}
        />
      )
  })

  return (
    <section 
      onClick={() => changeClass()} 
      className={`answer-section ${validStatus}`}
    >
      {renderedAnswers}
    </section>
  )
}

export default Answers;