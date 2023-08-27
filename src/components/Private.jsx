import React, { useContext } from 'react'
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"

export const Private = ({ children }) => {
    const { isAuth } = useContext(AuthContext)
    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return children;
}
