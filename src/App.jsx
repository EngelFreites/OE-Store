import React from 'react'
import './App.css'
import Header from './component/header/Header'
import { Footer } from './component/Footer/Footer'
import { Home } from './component/home/Home'

function App () {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
