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
  const [ questions, setQuestions ] = useState([])
  const [ currentQuote, setCurrentQuote ] = useState('');
  const [ correctAnswer, setCorrectAnswer ] = useState('');
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

  //input: array of character objs
  //output: question obj w/, { quote: '', answers[{value: '', isCorrect: t/f}]}
  //reduce characters


  // const getQuotes = () => {
  //   const allQuotes = []
  //   console.log(characters)
  //   characters.forEach(character => {
  //     character.quotes.forEach(quote => {
  //       if (!allQuotes.includes(character.quotes)) {
  //         allQuotes.push(quote)
  //       }
  //     })
  //   })
  //   setQuotes(allQuotes)
  // }

  const getIncorrectAnswers = (characters, rightAnswer) => {
    return characters.reduce((arr, character, i) => {
      let obj = {}
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
  
  const getRandomQuote = () => {
    const randomIndex = getRandomIndex(quotes);
    setCurrentQuote(quotes[randomIndex]);
  }

  // const getCorrectAnswer = () => {
  //   return characters.filter(character => character.quotes.includes(currentQuote))
  // }

  // const getIncorrectAnswers = (characters, rightAnswer) => {
  //   return characters.filter((character, i) => {
  //     if (character.name !== rightAnswer.name && i < 3) {
  //       return character
  //     }
  //   })
  // }

  // const collectPossibleAnswers = () => {
  //   const thisAnswer = getCorrectAnswer()[0];
  //   setCorrectAnswer(thisAnswer);
  //   console.log(correctAnswer)
  //   const shuffledCharacters = shuffleCharacters(characters);
  //   const incorrectAnswers = getIncorrectAnswers(shuffledCharacters, thisAnswer);
  //   const collectedAnswers = [...incorrectAnswers, correctAnswer];
  //   // const test = collectedAnswers.forEach(answer => {
  //   //   if (answer === correctAnswer) {
  //   //     answer.isCorrect = true;
  //   //   } else {
  //   //     answer.isCorrect = false;
  //   //   }
  //   // });
  //   collectedAnswers[0] !== undefined && setPossibleAnswers(collectedAnswers)
  // }

  useEffect(() => {
    getCharacters();
  }, []);

  // useEffect(() => {
  //   getQuotes();
  // }, [!!characters.length])

  // useEffect( () => {
  //   collectPossibleAnswers();
  //   console.log('currentQuote:', currentQuote)
  // }, [!!currentQuote])

  useEffect(() => {
    getQuestions()
  }, [!!characters.length])

  return (
    <>
      {error && <h1>{error}</h1>}
      <Quote currentQuote={currentQuote} getRandomQuote={getRandomQuote}/>
      {console.log(questions)}
      {/* {console.log('possible answers: ', shuffleCharacters(possibleAnswers))} */}
      {/* {!!possibleAnswers.length && <Answers possibleAnswers={possibleAnswers}/>} */}
    </>
  );
}

export default App;
