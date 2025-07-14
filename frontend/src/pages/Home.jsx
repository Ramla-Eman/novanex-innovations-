import React from 'react'
import Hero from '../components/Hero'
import HomeBanner from '../components/HomeBanner'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeBanner/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home