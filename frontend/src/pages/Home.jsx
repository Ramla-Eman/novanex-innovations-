import React from 'react'
import Hero from '../components/Hero'
import HomeBanner from '../components/HomeBanner'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import HomeProjects from '../components/HomeProjects'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeBanner/>
      <HomeProjects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home