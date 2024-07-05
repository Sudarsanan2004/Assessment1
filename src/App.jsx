import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
