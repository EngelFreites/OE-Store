import './App.css'
import Header from './component/header/Header'
import { Footer } from './component/Footer/Footer'

import Products from './component/Products/Products'

function App () {
  return (
    <div className="App">
      <Header />
      <Products products={products} />
      <Footer />
    </div>
  )
}

export default App
