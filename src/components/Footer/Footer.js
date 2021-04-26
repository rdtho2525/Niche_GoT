import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/trivia">Trivia</Link>
      <Link to="/saved-quotes">Saved Quotes</Link>
    </footer>
  )
}

export default Footer;