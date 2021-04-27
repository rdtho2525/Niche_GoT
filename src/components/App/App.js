import './App.css';
import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../api.js';
import { getRandomIndex } from '../../utilities.js';
import Quote from '../Quotes/Quotes.js'
import Answers from '../Answers/Answers.js';
import Home from '../Home/Home.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SavedQuote from '../SavedQuote/SavedQuote.js';
import { Switch, Route } from 'react-router-dom';
import { shuffleCharacters } from '../../utilities.js';


function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ questions, setQuestions ] = useState([]);
  const [ currentQuestion, setCurrentQuestion ] = useState('');
  const [ feedback, setFeedback ] = useState('');
  const [ validStatus, setValidStatus ] = useState('');
  const [ savedQuotes, setSavedQuotes ] = useState([]);
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

    if (isCorrect) {
      setFeedback('Correct!')
    } else {
      setFeedback('Incorrect!')
    }
  }

  const saveCurrentQuote = (quote) => {
    const storedQuotes = JSON.parse(localStorage.getItem('storedQuotes'));
    storedQuotes ? localStorage.setItem('storedQuotes', JSON.stringify([...storedQuotes, quote])) : localStorage.setItem('storedQuotes', JSON.stringify([quote]));    
    storedQuotes ? setSavedQuotes([...storedQuotes, quote]) : setSavedQuotes([quote]);
  }

  const removeSavedQuote = (quote) => {
    const storedQuotes = JSON.parse(localStorage.getItem('storedQuotes'));
    const filteredQuotes = storedQuotes.filter(storedQuote => storedQuote.quote !== quote)
    localStorage.setItem('storedQuotes', JSON.stringify(filteredQuotes))
    setSavedQuotes([...filteredQuotes])
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getQuestions()
  }, [!!characters.length])

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem('storedQuotes'));
    setSavedQuotes(storedQuotes)
  }, [])

  return (
    <>
      <Header />
      <main>
        {error && <h1 className="error-message">{error}</h1>}
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <section className="center-piece">
            <Route 
              exact path="/saved-quotes"
              render={() => <SavedQuote removeSavedQuote={removeSavedQuote} savedQuotes={savedQuotes}/>}
            />
            <Route 
              exact path="/play"
              render={() => (
                <>
                  <Quote 
                    currentQuestion={currentQuestion} 
                    validStatus={validStatus} 
                    saveCurrentQuote={saveCurrentQuote} 
                    getRandomQuestion={getRandomQuestion}
                  />
                  {feedback && <h2 className={'feedback'}>{feedback}</h2>}
                  {!!currentQuestion.answers && 
                    <Answers 
                      validateSelection={validateSelection} 
                      validStatus={validStatus} 
                      possibleAnswers={currentQuestion.answers}
                    />}
                </>
              )}
            />
          </section>
        </Switch>
    </main>
    <Footer getRandomQuestion={getRandomQuestion} />
    </>
  );
}

export default App;
