import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ getRandomQuestion }) => {

  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/play" onClick={() => getRandomQuestion()}>Play</Link>
      <Link to="/saved-quotes" className="saved-link">Saved Quotes</Link>
    </footer>
  )
}

export default Footer;