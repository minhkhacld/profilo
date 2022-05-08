import React from 'react'
import './Home.css'

import HomeQuote from './quote/Home.Quote';
import HomeCanvas from './canvas/Home.Canvas';

const Home = () => {

  return (
    <div className="cv-home">      
      <HomeQuote />
      <HomeCanvas />
    </div>
  )
}

export default Home