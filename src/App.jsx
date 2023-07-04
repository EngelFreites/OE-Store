import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import { Footer } from './component/Footer/Footer'

import Products from './component/Products/Products'

function App () {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json))
  },[products])

  const clouthes = products.filter( product => {
    if(product.category !== "electronics") return product
  })


  return (
    <div className="App">
      <Header />
      <Products products={clouthes} />
      <Footer />
    </div>
  )
}

export default App
