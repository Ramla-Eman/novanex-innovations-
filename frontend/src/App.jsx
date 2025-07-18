import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import pages
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App