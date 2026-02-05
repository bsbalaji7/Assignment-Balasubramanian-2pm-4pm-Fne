import React, { useState } from 'react'

export default function LightDarkToggle() {
    const [dark,setDark] = useState(false)
  return (
    <div style={{backgroundColor: dark ? "white" : "black",
        color: dark ? "black" : "white",
        height: "20rem",
        width: "20rem"
     }}>
      <h1>{dark ? "dark mode" : "Light mode"}</h1>
      <button onClick={() => {
        setDark(prev => !prev)
      }}>CHANGE</button>
    </div>
  )
}
