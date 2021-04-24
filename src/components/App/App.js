import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';
import Quote from '../Quotes/Quotes.js'
import Answers from '../Answers/Answers.js';
import { shuffleCharacters } from '../../utilities.js';


function App() {
  const [ characters, setCharacters ] = useState([]);
  // const [ quotes, setQuotes ] = useState([]);
  const [ questions, setQuestions ] = useState([])
  const [ currentQuestion, setCurrentQuestion ] = useState('');
  // const [ currentQuote, setCurrentQuote ] = useState('');
  // const [ correctAnswer, setCorrectAnswer ] = useState('');
  // const [ possibleAnswers, setPossibleAnswers ] = useState([]);
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

  const getIncorrectAnswers = (characters, rightAnswer) => {
    return characters.reduce((arr, character, i) => {
      // let obj = {}
      if (character.name !== rightAnswer.name && i < 3) {
        character.isCorrect = false;
        arr = [...arr, {answer: character.name, isCorrect: false}]
      }
      return arr;
    }, [])
  }
  
  
  const getQuestions = () => { 
    const questions = characters.reduce((arr, character, i) => {
      character.quotes.forEach((quote) => {
        if (character.quotes.includes(quote)) {
          character.isCorrect = true;
          var wrongAnswers = getIncorrectAnswers(characters, character)
        } 
        const possibleAnswers = [...wrongAnswers, {answer: character.name,   isCorrect: character.isCorrect}];
        let question = {quote: quote, answers: possibleAnswers}
        arr = [...arr, question]
      })
    
      return arr;
    }, []);

    setQuestions(questions);
  }
  
  const getRandomQuestion = () => {
    const randomIndex = getRandomIndex(questions);
    setCurrentQuestion(questions[randomIndex]);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getQuestions()
  }, [!!characters.length])

  return (
    <>
      {error && <h1>{error}</h1>}
      {/* <Quote currentQuote={currentQuote} getRandomQuote={getRandomQuote}/> */}
      <Quote currentQuestion={currentQuestion} getRandomQuestion={getRandomQuestion}/>
      {/* {console.log(questions)} */}
      {/* {console.log('possible answers: ', shuffleCharacters(possibleAnswers))} */}
      {console.log(currentQuestion.answers)}
      {!!currentQuestion.answers && <Answers possibleAnswers={currentQuestion.answers}/>}
    </>
  );
}

export default App;
