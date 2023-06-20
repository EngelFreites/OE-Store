import React from 'react'
import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

function App () {
  return (
    <div className="App">
      <Header/>
      <div className='content grid'>
      </div>
      <Footer/>
    </div>
  )
}

export default App
