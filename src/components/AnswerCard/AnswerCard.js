import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
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

AnswerCard.propTypes = { 
  answer: PropTypes.object,
  id: PropTypes.string,
  validateSelection: PropTypes.func
}