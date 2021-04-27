import React from 'react';
import * as sigil from '../../JoinTheRealm_sigil.png';
import './Home.css'

const Home = () => {

  return (
    <section className="home">
      <img className="home-img" src={sigil.default} alt="House Stark Sigil"/>
    </section>
  )
}

export default Home;