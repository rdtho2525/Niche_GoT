import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';

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
  }

  useEffect( async () => {
    await getCharacters();
    await getQuotes();
  }, [])

  return (
    <>
      {error && console.log(error)}
      {/* {console.log(characters[0])} */}
      {/* {console.log(quotes)} */}
      {/* {quotes.map((quote, i) => {
          return <p key={i}>{quote}</p>
        })} */}
      <button onClick={() => getRandomQuote()}>Click me!</button>
      {currentQuote && <h1>{currentQuote}</h1>}
      {characters.map(character => {
        return <p key={character.name}>{character.name}</p>
      })}
    </>
  );
}

export default App;
