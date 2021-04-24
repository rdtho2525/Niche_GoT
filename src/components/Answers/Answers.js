import React, { useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';

const Answers = ({ possibleAnswers }) => {
  const renderedAnswers = possibleAnswers.map((answer, i) => {
    if (possibleAnswers[0] !== undefined) {
      return (
        <AnswerCard key={`${answer}_${i}`} answer={answer.answer}/>
      )
    }
  })

  return (
    <>
      <section className="answer-section">
        {renderedAnswers}
      </section>
    </>
  )
}

export default Answers;