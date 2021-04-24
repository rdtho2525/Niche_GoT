import React from 'react';

const AnswerCard = ({ answer,key }) => {
  
  return (
    <p key={`${key}`} className="answer">{answer}</p>
  )
}

export default AnswerCard;