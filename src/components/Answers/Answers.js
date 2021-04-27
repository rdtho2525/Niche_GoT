import React from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import PropTypes from 'prop-types';

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

Answers.propTypes = { 
  possibleAnswers: PropTypes.array,
  validateSelection: PropTypes.func,
  validStatus: PropTypes.string
}