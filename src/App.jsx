import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoute from './Routes/MainRoute'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <MainRoute/>
    </>
  )
}

export default App
