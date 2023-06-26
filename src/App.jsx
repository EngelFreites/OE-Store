import React from 'react'
import './App.css'
import Header from './component/header/Header'
import img from './assets/initial.jpg'
import model2 from './assets/model2.jpeg'
import { FaStoreAlt } from 'react-icons/fa'
import { Title } from './component/Title/Title'
import model from './assets/model.jpg'
import { Footer } from './component/Footer/Footer'

function App () {
  return (
    <div className="App">
      <Header />
      <div className='content grid'>
        <div className='bar col-12 '>
          <FaStoreAlt />
          Mi tienda online
        </div>
        <div className='content-img full-width'>
          <img src={img} alt='inital-img'/>
        </div>
          <Title>Recomendacion</Title>
          <div className='recomendaciones full-width' >
            <img src={model} alt='model' className='recomendacion' />
            <img src={model2} alt='model' className='recomendacion' />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
