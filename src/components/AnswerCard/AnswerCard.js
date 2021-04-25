import React, { useState } from 'react';
import './AnswerCard.css';

const AnswerCard = ({ answer, id, handleClick }) => {
  const [ buttonColor, setButtonColor ] = useState('');
  
  const getColorScheme = () => {
    answer.isCorrect ? setButtonColor('correct') : setButtonColor('incorrect')
  }

  return (
    <button 
      key={id} 
      className={`answer ${buttonColor}`} 
      onClick={() => {
      handleClick(answer.isCorrect)
      getColorScheme();
    }}>
      {answer.answer}
    </button>
  )
}

export default AnswerCard;