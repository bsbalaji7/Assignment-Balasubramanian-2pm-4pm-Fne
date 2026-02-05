import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Toggle from './components/Toggle'
import LInput from './components/input'
import Button from './components/button'
import Counter2 from './components/counter2'
import CounterCard from './components/CounterCard'
import Profile from './components/Profile'
import LightDarkToggle from './components/LightDarkToggle'
import MultiState from './components/MultipleState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Counter />
      <Toggle />
      <LInput />
      <Button />
      <Counter2 />
    <br /><br /><br />
      <h2>practical task</h2>

      <CounterCard />
      <Profile />
      <LightDarkToggle /> <br /><br /><br />
      <MultiState />
    </>
  )
}

export default App
