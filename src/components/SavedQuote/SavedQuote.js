import React from 'react';
import '../Quotes/Quotes.css'
import './SavedQuote.css';


const SavedQuote = ({ savedQuotes, removeSavedQuote }) => {
  const renderedSaved = savedQuotes.map((quote, i) => {
    const credit = quote.answers.filter(answer => answer.isCorrect)[0].answer

    return (
      <section key={i} className="quote-section">
        <h2>"{quote.quote}"</h2>
        <aside>{credit}</aside>
        <div className="remove-btn-container">
          <button onClick={() => removeSavedQuote(quote.quote)} className="remove-button">Remove</button>
        </div>
      </section>
    )
  })
  
  return (
    <>
      {!!savedQuotes.length && renderedSaved}
    </>
  )
}

export default SavedQuote;