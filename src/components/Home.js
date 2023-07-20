import React from 'react'
import SliderNew from './SliderNew'
import ProductionHouse from './ProductionHouse'
import GenereMovieList from './GenereMovieList'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header/>
      <SliderNew/>
      <ProductionHouse/>
      <GenereMovieList/>
    </div>
  )
}

export default Home