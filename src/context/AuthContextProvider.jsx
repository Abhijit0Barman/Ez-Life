import React, { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [name, setName] = useState("user")

  const login = (name) => {
    // console.log(name);
    setIsAuth(true)
    setName(name)
  }

  const logout = () => {
    setIsAuth(false)
  }

  const providerState = {
    login: login,
    logout: logout,
    isAuth: isAuth,
    name: name,
    setIsAuth
  }

  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  )
}
