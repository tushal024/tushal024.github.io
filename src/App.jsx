import { useState } from 'react'
import './App.css'
import { MainRoute } from './Routes/MainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <MainRoute/>
     
    </>
  )
}

export default App
