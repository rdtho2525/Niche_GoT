import React from 'react';
// import { Link } from 'react-router-dom';
import './Quotes.css';

const Quote = ({ currentQuestion, getRandomQuestion }) => {
  
  return (
    <section className="quote-section">
      <div className="quote-container">
        <h2>"{currentQuestion && currentQuestion.quote}"</h2>
      </div>
      <div className="button-container">
        <button className="post-answer">Save this quote?</button>
        <button className="post-answer" onClick={() => {
          getRandomQuestion();
        }}>
          Next quote
        </button>
      </div>
    </section>
  )
}

export default Quote;