import React, { useEffect, useState} from 'react';
import './AnswerCard.css';

const AnswerCard = ({ answer, id, handleClick }) => {
  const [ selectedStatus, setSelectedStatus ] = useState('');
  
  const checkSelectedStatus = () => {
   setSelectedStatus('selected')
  }

  useEffect(() => {
    setSelectedStatus('');
  }, [answer])
 
  return (
    <button 
      key={id} 
      className={`answer ${selectedStatus} ${answer.isCorrect} `} 
      onClick={() => {
      handleClick(answer.isCorrect)
      checkSelectedStatus();}}
      >
      {answer.answer}
    </button>
  )
}

export default AnswerCard;