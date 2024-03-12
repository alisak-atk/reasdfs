import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <MainContent />

      
    </div>
  )
}

export default App
