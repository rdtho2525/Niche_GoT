import React from 'react';
import * as sigil from '../../JoinTheRealm_sigil.png';
import './Home.css'

const Home = () => {

  return (
    <section className="home">
      {console.log(sigil.default)}
      <img className="home-img" src={sigil.default}/>
    </section>
  )
}

export default Home;