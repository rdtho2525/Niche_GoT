import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';
import Quote from '../Quotes/Quotes.js'

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ quotes, setQuotes ] = useState([]);
  const [ currentQuote, setCurrentQuote ] = useState('');
  const [ error, setError ] = useState('');

  const getCharacters = async () => {
    try {
      const allCharacters = await fetchCharacters();
      setCharacters(allCharacters);
    } catch(error) {
      setError(error);
      console.log(error)
    }
  }

  const getQuotes= () => {
    const arr = []
    characters.forEach(character => {
      character.quotes.forEach(quote => {
        if (!arr.includes(character.quotes)) {
          arr.push(quote)
        }
      })
    })
    setQuotes(arr)
  }
  
  const getRandomQuote = () => {
    const randomIndex = getRandomIndex(quotes);
    setCurrentQuote(quotes[randomIndex]);
    console.log(quotes);
  }

  useEffect( async () => {
    await getCharacters();
    await getQuotes();
  }, [quotes])

  return (
    <>
      {error && <h1>{error}</h1>}
      <Quote currentQuote={currentQuote} getRandomQuote={getRandomQuote}/>
      {/* {console.log(characters[0])} */}
      {console.log(quotes)}
    </>
  );
}

export default App;
