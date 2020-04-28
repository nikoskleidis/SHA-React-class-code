function delay(ms){
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export async function saveUser(user) {
  await delay(3000)
  const usersStored = localStorage.getItem("users")
  const users = usersStored ? JSON.parse(usersStored) : []
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
}

export async function getUsers() {
  await delay(4000)
  const usersStored = localStorage.getItem("users")
  return usersStored ? JSON.parse(usersStored) : []
}
