import { useState } from "react";

export default function MultiState() {

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [text, setText] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        height: "100vh",
        background: dark ? "#111" : "#fff",
        color: dark ? "white" : "black"
      }}
    >

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>➕</button>
      <button onClick={() => setCount(c => c - 1)}>➖</button>

      <hr />


      <h2>{dark ? "Dark 🌙" : "Light ☀️"}</h2>
      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>

      <hr />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}
