import React, {useEffect, useState} from "react";
import "./styles.css"
import {getUsers} from "../../utils";

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUsersAsync() {
    try{
      setIsLoading(true)
      const userList = await getUsers()
      setUsers(userList)
      setIsLoading(false)
    } catch (e) {
      console.log("error")
    }
  }

  useEffect(() => {
    getUsersAsync()
  }, [])

  return (
    <div className={`${props.className} wrapper`}>
      {isLoading && <span>Loading users, please wait...</span>}
      <button onClick={getUsersAsync}>Update userList</button>
      {users.map((user, index) => (
        <div className="entry" key={index}>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.job}</span>
          <span>{user.hobby}</span>
        </div>
      ))}
    </div>
  )
}

export default UserList
