import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/dashboard" element = {<Dashboard />}/>
        <Route path="/projects" element= {<Projects/>} />
        <Route path="/sign-in" element= {<SignIn/>} />
        <Route path="/sign-up" element = {<SignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
