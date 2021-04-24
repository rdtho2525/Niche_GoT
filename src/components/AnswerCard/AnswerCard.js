import React from 'react';

const AnswerCard = ({ answer }) => {
  
  return (
    <p key={answer} className="answer">{answer}</p>
  )
}

export default AnswerCard;