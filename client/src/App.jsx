import React  from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/auth/Login/Login"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/home',
      element:<Home />
    },
    {
      path:'/login',
      element:<Login />
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
