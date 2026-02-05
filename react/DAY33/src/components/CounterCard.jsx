import React from 'react'
import { useState } from 'react';

export default function CounterCard() {
  const [count, setCount] = useState(0);
   
     const increment = () => setCount(count + 1);
     const decrement = () => setCount(count - 1);
     const reset = () => setCount(0);
   
     return (
       <div style={styles.card}>
         <h1>{count}</h1>
   
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
         <button onClick={reset}>Reset</button>
       </div>
     );
    }
     const styles = {
  card: {
    textAlign: "center",
    margin: "100px auto",
    padding: "30px",
    width: "200px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    backgroundColor : "gray"
  }

}
