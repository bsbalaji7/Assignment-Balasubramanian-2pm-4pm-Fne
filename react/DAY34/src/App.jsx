import { useState } from "react";
import "./App.css";
import dino from "./assets/image.png";

function App() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
    setTimeout(() => setShow(false), 6000);
  }
  const roar = new Audio("/t-rex-growl-324746(1).pm3");

function handleClick() {
  setShow(true);
  roar.play();
}


  return (
    <div className="scene">
      <button className="btn" onClick={handleClick}>
        Start Dino Scene
      </button>

      {show && <img src={dino} className="dino-run" alt="dino" />}
    </div>
  );
}

export default App;
