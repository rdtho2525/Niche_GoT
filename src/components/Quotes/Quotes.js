import React, { useState } from 'react';
import './Quotes.css';

const Quote = ({ 
  currentQuestion, 
  getRandomQuestion, 
  saveCurrentQuote, 
  removeSavedQuote 
}) => {
  const [ isSaved, setIsSaved ] = useState(false)
  // const [ saveMessage, setSaveMessage ] = useState('Save this quote');

  const toggleSavedStatus = () => {
    // currentQuestion.isSaved ? setSaveMessage('Saved') : setSaveMessage('Save this quote');
    // isSaved ? setIsSaved(false) : setIsSaved(true);
    if (!isSaved) {
      saveCurrentQuote(currentQuestion)
      setIsSaved(true)
      console.log(isSaved)
    } else {
      removeSavedQuote()
      setIsSaved(false)
      console.log(isSaved)
    }
  }

  const checkSavedStatus = () => {
    let message = '';
    isSaved ? message = 'Saved' : message = 'Save this quote';
    return message;
  }

  return (
    <section className="quote-section">
      <div className="quote-container">
        <h2>"{currentQuestion && currentQuestion.quote}"</h2>
      </div>
      <div className="button-container">
        <button className="post-answer" onClick={() => {
          // saveCurrentQuote(currentQuestion);
          toggleSavedStatus();
        }}>{checkSavedStatus()}</button>
        <button className="post-answer" onClick={() => {
          getRandomQuestion();
        }}>
          Next quote ⇨
        </button>
      </div>
    </section>
  )
}

export default Quote;