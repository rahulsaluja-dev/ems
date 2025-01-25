import {useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"
const App = () => {


const [user, setUser] = useState(null)
const [loggedInUserdata, setLoggedInUserdata] = useState(null)
const [userData,SetUserData] =useContext(AuthContext )
useEffect(() => {
 
  const loggedInUser= localStorage.getItem("loggedInuser")
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    loggedInUserdata(userData.data)
 }
 
  
},[])
  

const handleLogin =(email,password) =>{
    if(email=='admin@me.com'&& password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee =userData.find((e)=>email==e.email && e.password==password)
      if(employee){ 
        setUser('employee')
        setLoggedInUserdata(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
  }
    else{
      alert("invalid")
    }
}
 
  return ( 
   <>
{!user ? <Login handleLogin={handleLogin}/>  : ''}
{/* {user =='admin' ? <AdminDashboard />: {user == 'employee' ? <EmployeeDashboard  data={loggedInUserdata}/> : null}} */}
{user == 'admin' ?  <AdminDashboard  changeUser={setUser}/> : user == 'employee' ?  <EmployeeDashboard changeUser={setUser} data={loggedInUserdata} /> : null}

   </>
  )
}

export default App