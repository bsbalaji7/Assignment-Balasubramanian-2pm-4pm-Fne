import React, { useState } from 'react'

export default function Button() {
    const [change,setChange] = useState(true)
    const changeText = () => {
        setChange(prev => !prev)
    }

  return (
    <div>
      <button onClick={changeText}>{change ? "ok" :"ok un solliten la"}</button>
    </div>
  )
}
