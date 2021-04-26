import React from 'react';
import '../Quotes/Quotes.css'

const SavedQuote = ({ savedQuotes }) => {
  const renderedSaved = savedQuotes.map((quote, i) => {
    const credit = quote.answers.filter(answer => answer.isCorrect)[0].answer

    return (
      <section key={i} className="quote-section">
        <h2>"{quote.quote}"</h2>
        <aside>{credit}</aside>
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