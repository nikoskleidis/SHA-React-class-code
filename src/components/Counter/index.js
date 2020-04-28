import React, { useState } from "react"

const increment = (value) => value + 1

function Button(props) {
  return <button onClick={() => props.setCount(increment)}>Add 1!</button>
}

const Count = (props) => {
  return (
    <h1>
      The current Count is {props.currentCount}
    </h1>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Count currentCount={counter} />
      <Button setCount={setCounter} />
    </div>
  )
}

export default Counter
