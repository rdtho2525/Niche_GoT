import React from 'react';
import { Link } from 'react-router-dom';
import './Quotes.css';

const Quote = ({ currentQuote, getRandomQuote }) => {
  
  
  return (
    <>
    <section className="quote-section">
      <div className="quote-container">
        <h2>"{currentQuote && currentQuote}"</h2>
      </div>
      <div className="button-container">
        <button>Save this quote?</button>
        <button onClick={() => {
          getRandomQuote();
        }}>Next quote</button>
      </div>
    </section>
    </>
  )
}

export default Quote;