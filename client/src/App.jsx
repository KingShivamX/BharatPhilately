import React from "react"

import Home from "./pages/home/Home"
import Login from "./pages/auth/Login/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/login',
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
