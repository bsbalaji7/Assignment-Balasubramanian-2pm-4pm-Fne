import React, { useState } from 'react'

export default function LInput() {
    const [live,setLive] = useState("");

  return (
    <div>
        <input value={live} onChange={(e) => setLive(e.target.value)} type="text" />
        <h1>you are typing: {live}</h1>
      
    </div>
  )
}
