import React from "react";
import {useRandomDog} from "../Hooks/useRandomDog";

const DogOfTheYear = () => {
  const { dogImage } = useRandomDog()

  return (
    <div>
      <h1>The Dog of the month is</h1>
      <img src={dogImage}/>
    </div>
  )
}


export default DogOfTheYear
