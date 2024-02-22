import React from 'react'
import Hero from '../utilities/hero'
import TopBar from '../utilities/topbar'
import Companies from '../utilities/stockTicker'
import Charts from '../utilities/charts'
import ProfileStats from '../utilities/profileStats'

function index() {
  return (
    <div >
      <TopBar/>
      <Hero/>
      <Companies/>
      <Charts/>
      <ProfileStats/>

    </div>
  )
}

export default index