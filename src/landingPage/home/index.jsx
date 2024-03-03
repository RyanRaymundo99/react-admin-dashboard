import React from 'react'
import Hero from '../utilities/hero'
import TopBar from '../utilities/topbar'
import Companies from '../utilities/stockTicker'
import Charts from '../utilities/charts'
import ProfileStats from '../utilities/profileStats'
import Footer from '../utilities/footer'

function index() {
  return (
    <div >
      <TopBar/>
      <Hero/>
      <Companies/>
      <Charts/>
      <ProfileStats/>
      <Footer/>
    </div>
  )
}

export default index