import { useState } from "react";

export default function Profile() {
  const [change, setChange] = useState(true);

  const changeText = () => {
    setChange(prev => !prev);
  };

  const leo = ["Leo", "FSD", "Chennai"];
  const JD = ["John Durairaj", "DSA", "USA"];

  return (
    <div>
      <h1>{change ? leo.join(" | ") : JD.join(" | ")}</h1>

      <button onClick={changeText}>Click</button>
    </div>
  );
}
