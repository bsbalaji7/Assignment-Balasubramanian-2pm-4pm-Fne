import React from 'react'

function Cards({children}) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      {children}
    </div>
  )
}

export default Cards
