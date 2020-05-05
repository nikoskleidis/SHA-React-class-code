import React from "react";
import { useRandomDog } from "../Hooks/useRandomDog";

const DogOfTheYear = () => {
  const { dogImage, loading } = useRandomDog()

  return (
    <div>
      <h1>The Dog of the year is</h1>
      {loading ? <div>loading... </div>: <img src={dogImage}/>}
    </div>
  )
}


export default DogOfTheYear
