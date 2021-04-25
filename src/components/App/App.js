import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';
import Quote from '../Quotes/Quotes.js'
import Answers from '../Answers/Answers.js';
import { shuffleCharacters } from '../../utilities.js';


function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ questions, setQuestions ] = useState([])
  const [ currentQuestion, setCurrentQuestion ] = useState('');
  const [ feedback, setFeedback ] = useState('');
  const [ validStatus, setValidStatus ] = useState('');
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
    const wrongAnswers = shuffleCharacters(characters).filter(character => character.name !== rightAnswer.name)
    return wrongAnswers.reduce((arr, character, i) => {
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
        let question = {quote: quote, answers: shuffleCharacters(possibleAnswers)}
        arr = [...arr, question]
      })
    
      return arr;
    }, []);

    setQuestions(questions);
  }
  
  const getRandomQuestion = () => {
    const randomIndex = getRandomIndex(questions);
    setFeedback('');
    setValidStatus('');
    setCurrentQuestion(questions[randomIndex]);
  }

  const validateSelection = (isCorrect) => {
    setValidStatus('validated');

    if (isCorrect === true) {
      setFeedback('Correct!')
    } else {
      setFeedback('Incorrect!')
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getQuestions()
  }, [!!characters.length])

  return (
    <main>
      {error && <h1>{error}</h1>}
      <Quote currentQuestion={currentQuestion} validStatus={validStatus} getRandomQuestion={getRandomQuestion}/>
      {feedback && <h2>{feedback}</h2>}
      {!!currentQuestion.answers && <Answers validateSelection={validateSelection} validStatus={validStatus} possibleAnswers={currentQuestion.answers}/>}
    </main>
  );
}

export default App;
