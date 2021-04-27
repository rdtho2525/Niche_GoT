import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ getRandomQuestion }) => {

  return (
    <footer>
      <div className={"nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/play" onClick={() => getRandomQuestion()}>Play</Link>
        <Link to="/saved-quotes" className="saved-link">Saved Quotes</Link>
      </div>
    </footer>
  )
}

export default Footer;