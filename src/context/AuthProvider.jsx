import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState([])

    useEffect(() => {
        setLocalStorage()
        const {employees,admin} = getLocalStorage()
        setuserData({employees,admin})
    },[])
    

  return (
    <div>
      <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
