import React from "react"

import Home from "./pages/home/Home"
import Login from "./pages/auth/Login/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./pages/auth/register/Register"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/auth/register',
      element: <Register />
    },
    {
      path: '/auth/login',
      element: <Login />
    }
  ])

  //further process--  we will provide saferoutes :: privateroutes..

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
