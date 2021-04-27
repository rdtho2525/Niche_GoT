import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Quotes.css';

const Quote = ({ 
  currentQuestion, 
  getRandomQuestion, 
  saveCurrentQuote, 
  removeSavedQuote 
}) => {
  const [ isSaved, setIsSaved ] = useState(false)

  const toggleSavedStatus = () => {
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
    <section key={Date.now()} className="quote-section">
      <div className="quote-container">
        <h2>"{currentQuestion && currentQuestion.quote}"</h2>
      </div>
      <div className="button-container">
        <button className="post-answer save" onClick={() => {
          toggleSavedStatus();
        }}>{checkSavedStatus()}</button>
        <button className="post-answer next" onClick={() => {
          getRandomQuestion();
        }}>
          Next quote ⇨
        </button>
      </div>
    </section>
  )
}

export default Quote;

Quote.propTypes = { 
  currentQuestion: PropTypes.object,
  getRandomQuestion: PropTypes.func,
  saveCurrentQuote: PropTypes.func,
  removeSavedQuote: PropTypes.func
}