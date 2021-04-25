import React, { useState, useEffect } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import './Answers.css';

const Answers = ({ possibleAnswers, handleClick, validStatus }) => {

  const changeClass = (event) => {
    validStatus ? validStatus = '' : validStatus = 'validated';
  }

  const renderedAnswers = possibleAnswers.map((answer, i) => {
      return (
        <AnswerCard 
          id={`${answer.answer}_${i}`} 
          handleClick={handleClick} 
          answer={answer}
        />
      )
  })

  return (
    <section 
      onClick={(event) => changeClass(event)} 
      className={`answer-section ${validStatus}`}
    >
      {renderedAnswers}
    </section>
  )
}

export default Answers;