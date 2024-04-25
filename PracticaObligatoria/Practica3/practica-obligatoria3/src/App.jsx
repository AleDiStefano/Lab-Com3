import './App.css'
import { useState } from 'react'
import Login from './components/login/Login'

function App() {
  const users =  [{ userName: 'Admin'}]
  const  [stateUsers,setstateUsers] = useState(users) 
  
  const handleUsers = (newUserName) =>{
    const newUsers =  [...stateUsers,newUserName]
    setstateUsers(newUsers)
  }
  
  return (
    <>
    <Login handleUsers={handleUsers}/>
    <p>Usuaios:</p>
    {stateUsers.map(user =>(
      <h6 key={user.userName}>{user.userName}</h6>
    ))}
    </>
  )
}

export default App
