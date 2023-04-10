import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header> header</header>
      <div className='content grid'>
        <div className='col-2'></div>
        <div className='col-3'></div>
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default App
