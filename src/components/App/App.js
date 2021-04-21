import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [error, setError ] = useState('');

  const getCharacters = async () => {
    try {
      const allCharacters = await fetchCharacters();
      setCharacters(allCharacters);
    } catch(error) {
      setError(error);
      console.log(error)
    }
  }
  
  useEffect(() => {
    getCharacters();
    console.log(characters)
  }, [])
  return (
    <>
      {error && console.log(error)}
      {characters.map(character => {
        return (
          <p key={character.name}>{character.name}</p>
        )
      })}
    </>
  );
}

export default App;
