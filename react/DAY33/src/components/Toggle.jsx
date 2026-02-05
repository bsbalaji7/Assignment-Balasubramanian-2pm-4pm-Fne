import { useState } from "react";

function Toggle() {
  const [show,setShow] = useState(true);
  const toggletext = () => {
            setShow(!show)
  }

  return (
  <div>
        <h1>{show ? "Na leo ela" : "Na dhn da leo leo das"}</h1>
        <button onClick={toggletext}>click</button>
  </div>
    
  );
}

export default Toggle;
