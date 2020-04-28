import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [bigCounter, setBigCounter] = useState(0)
  return (
    <div>
      <h1>The counter is: {counter}</h1>
      <h2>My Big counter is: {bigCounter}</h2>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1)
          setBigCounter((prevBigCounter) => prevBigCounter + 10)
        }}>Increase</button>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => {
          setCounter((prevCounter) => prevCounter - 1)
          setBigCounter((prevBigCounter) => prevBigCounter - 10)
        }}>Decrease</button>
    </div>
  )

}

export default Counter
