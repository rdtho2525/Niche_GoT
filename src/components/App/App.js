import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';
import Quote from '../Quotes/Quotes.js'
import Answers from '../Answers/Answers.js';
import { shuffleCharacters } from '../../utilities.js';


function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ quotes, setQuotes ] = useState([]);
  const [ currentQuote, setCurrentQuote ] = useState('');
  const [ possibleAnswers, setPossibleAnswers ] = useState([]);
  const [ error, setError ] = useState('');

  const getCharacters = async () => {
    try {
      const allCharacters = await fetchCharacters();
      setCharacters(allCharacters)
    } catch(error) {
      setError(error);
      console.log(error)
    }
  }

  const getQuotes = () => {
    const allQuotes = []
    characters.forEach(character => {
      character.quotes.forEach(quote => {
        if (!allQuotes.includes(character.quotes)) {
          allQuotes.push(quote)
        }
      })
    })
    // const allQuotes = characters.reduce((arr, character) => {
    //   console.log(character)
    //   character.quotes.forEach(quote => {
    //     if (!arr.includes(character.quotes)) {
    //       arr.push(quote)
    //     }
    //   })
    // }, [])
    // console.log(allQuotes)
    setQuotes(allQuotes)
  }
  
  const getRandomQuote = () => {
    const randomIndex = getRandomIndex(quotes);
    setCurrentQuote(quotes[randomIndex]);
  }

  const getCorrectAnswer = () => {
    return characters.filter(character => character.quotes.includes(currentQuote))
  }

  const getIncorrectAnswers = (characters, rightAnswer) => {
    characters.filter((character, i) => {
      if (character.name !== rightAnswer.name && i < 3) {
        return character
      }
    })
  }

  const collectPossibleAnswers = () => {
    const correctAnswer = getCorrectAnswer()[0];
    const shuffledCharacters = shuffleCharacters(characters);
    const incorrectAnswers = getIncorrectAnswers(shuffledCharacters, correctAnswer);
    // console.log('right answer: ', correctAnswer)
    // console.log('wrongAnswers: ', incorrectAnswers)
    // console.log('all answers: ', [...incorrectAnswers, correctAnswer]);
    incorrectAnswers && setPossibleAnswers(() => [...incorrectAnswers, correctAnswer])
  }

  useEffect( async () => {
    await getCharacters();
  }, []);

  useEffect( async () => {
    await getQuotes();
  }, [!!characters.length])

  return (
    <>
      {error && <h1>{error}</h1>}
      <Quote currentQuote={currentQuote} getRandomQuote={getRandomQuote}/>
      {/* {console.log(possibleAnswers)} */}
      {/* {!!possibleAnswers.length && <Answers possibleAnswers={possibleAnswers}/>} */}
    </>
  );
}

export default App;
