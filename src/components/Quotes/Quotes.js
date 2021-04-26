import React, { useState } from 'react';
import './Quotes.css';

const Quote = ({ currentQuestion, getRandomQuestion, saveCurrentQuote }) => {

  return (
    <section className="quote-section">
      <div className="quote-container">
        <h2>"{currentQuestion && currentQuestion.quote}"</h2>
      </div>
      <div className="button-container">
        <button className="post-answer" onClick={() => {
          saveCurrentQuote(currentQuestion);
        }}>{saveMessage}</button>
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