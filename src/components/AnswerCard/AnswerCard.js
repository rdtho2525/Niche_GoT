import React, { useEffect, useState} from 'react';
import './AnswerCard.css';

const AnswerCard = ({ 
  answer, 
  id, 
  validateSelection 
}) => {
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
      validateSelection(answer.isCorrect)
      checkSelectedStatus();}}
      >
      {answer.answer}
    </button>
  )
}

export default AnswerCard;