import React from "react"

function Hobby({ hobby }) {
  const { name, years } = hobby
  const isNetflix = name === "netflix"
  const isGym = name === "gym"
  return (
    <li>
      {name}
      {isNetflix && "I love casa de papel"}
      {isGym && "Gym is closed dude!"}
      I have been practising this hobby for {years} years!
    </li>
  )
}

function User({ name, surname, postal, address, job, hobbies }) {
  return (
    <div>
      <h2>Name: {name} {surname}</h2>
      <h3>address: {address}</h3>
      <h3>postal code: {postal}</h3>
      <h3>job: {job}</h3>
      <h3>hobbies:</h3>
      <ul>
        {hobbies.map((hobbyObj, index) => <Hobby key={index} hobby={hobbyObj} />)}
      </ul>
    </div>
  )

}

export default User
