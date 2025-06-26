import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [userData, setuserData] = useState([])
  const [user, setuser] = useState("")
  const [loggedUser, setloggedUser] = useState("")
  const [idx, setidx] = useState("")
  const [loggedUserData, setloggedUserData] = useState("")

  const authData = useContext(AuthContext)





  const handleLogin = (email, password) => {
    if (authData) {
      // Check in admins
      const admin = authData.admin.find(e => email === e.email && password === e.password);
      if (admin) {
        setuser("admin");
        const id = admin.id -1
        console.log(authData.admin[id])
        setuserData(authData.admin[id])
        setloggedUser("admin")
        localStorage.setItem("loggedUser", "admin")
        localStorage.setItem("loggedUserData", JSON.stringify(authData.admin[id]))
        return;

      }
      // Check in employees
      const employee = authData.employees.find(e => email === e.email && password === e.password);
      if (employee) {
        setuser("employees");
        const id = employee.id -1
        setuserData(authData.employees[id])
        setloggedUser("employees")
        localStorage.setItem("loggedUser", "employees")
        localStorage.setItem("loggedUserData", JSON.stringify(authData.employees[id]))
        return;
      }
    }
    
    // If no match is found
    alert("Invalid Credentials");
  };

  console.log(userData)

  useEffect(() => {
    setloggedUser(localStorage.getItem("loggedUser"))
    setuserData(JSON.parse(localStorage.getItem("loggedUserData")))
  }, [])
  

  return (
    <>
    {!loggedUser ? <Login handleLogin={handleLogin} /> : ""}
    {loggedUser == "admin" ? <AdminDashboard userData={userData} /> : "" }
    {loggedUser == "employees" ? <EmployeeDashboard userData={userData}/> : ""}
    </>
  )
}

export default App
