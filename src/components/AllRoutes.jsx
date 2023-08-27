import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { PageNotFound } from "../pages/PageNotFound"
import { Private } from './Private'

export const AllRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={
          <Private>
            <Dashboard />
          </Private>

        } />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
