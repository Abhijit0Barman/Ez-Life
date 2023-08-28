import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { PageNotFound } from "../pages/PageNotFound"
import { Private } from './Private'
import { Signup } from '../pages/Signup'
import { Cart } from "../pages/Cart"

export const AllRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={
          <Private>
            <Dashboard />
          </Private>

        } />
        <Route path='/' element={
          <Private>
            <Home />
          </Private>} />
        <Route path='/cart' element={
          <Private>
            <Cart />
          </Private>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
