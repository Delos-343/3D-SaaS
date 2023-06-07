// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Intro } from './pages'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Intro /> } />
        <Route exact path='/Home' element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App
