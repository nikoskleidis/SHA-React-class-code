import React, {useEffect, useState} from "react";
import "./styles.css"
import {saveUser} from "../../utils";

const initialState = {
  username: "",
  email: "",
  job: "",
  hobby: ""
}

const UserForm = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlueUser, setIsBlueUser] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await saveUser(form)
    setIsLoading(false)
    setForm(initialState)
  }

  useEffect(() => {
    if (["nikos", "daniel", "giorgos"].includes(form.username)) {
      setIsBlueUser(true)
    } else {
      setIsBlueUser(false)
    }
  }, [form.username])

  useEffect(() => {
    console.log("Component mounted")
    return () => {
      console.log("UNMOUNTING....")
    }
  }, [])

  function updateFieldValue (e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h3>User form</h3>
      <form className="form" style={{ backgroundColor: isBlueUser ? "blue" : "transparent" }}>
        <label htmlFor="form_username">Username</label>
        <input
          id="form_username"
          type="text"
          name="username"
          value={form.username}
          onChange={updateFieldValue}
        />
        <label htmlFor="form_email">Email</label>
        <input
          id="form_email"
          type="email"
          name="email"
          value={form.email}
          onChange={updateFieldValue}
        />
        <label htmlFor="form_job">Job</label>
        <input
          id="form_job"
          type="text"
          name="job"
          value={form.job}
          onChange={updateFieldValue}
        />
        <label htmlFor="form_hobby">Hobby</label>
        <input
          id="form_hobby"
          type="text"
          name="hobby"
          value={form.hobby}
          onChange={updateFieldValue}
        />
        <button onClick={submitForm}>
          Submit
        </button>
        {isLoading && <h6>Loading...</h6>}
      </form>
    </div>
  )

}

export default UserForm
