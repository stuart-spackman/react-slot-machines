import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SlotMachine from './SlotMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Emoji slot machines for Jordyn!</h1>
      <p>Made using React. Refresh the page until there's a winner.</p>
      <SlotMachine />
    </>
  )
}

export default App
