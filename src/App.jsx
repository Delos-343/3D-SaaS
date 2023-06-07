// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Intro } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Intro /> } />
        <Route exact path='/home' element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App
