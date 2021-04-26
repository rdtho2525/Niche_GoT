import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ getRandomQuestion }) => {

  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/trivia" onClick={() => getRandomQuestion()}>Trivia</Link>
      <Link to="/saved-quotes">Saved Quotes</Link>
    </footer>
  )
}

export default Footer;