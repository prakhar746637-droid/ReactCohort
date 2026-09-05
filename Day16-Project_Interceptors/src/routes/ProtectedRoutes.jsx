import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoutes = () => {
  const {loggedInUsers} = useContext(Auth)
  if(!loggedInUsers){

    return <Navigate to={'/'}/>
  }
  return <Outlet/>
}

export default ProtectedRoutes
