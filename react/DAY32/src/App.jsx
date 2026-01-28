import { Children, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Year from './components/Year'
import Button from './components/Button'
import Promps from './components/Promps'
import  Card  from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* practical task */}
    <Card />


    {/* practice task */}
      <Year year={2026} />
      <Button text={"Leo"} />
      <Button text={"Leo"} />
      <Button text={"Leo"} />
      <Promps text={"leo"}/>
      <Footer />
      
    </>
  )
}

export default App
