import React from "react"

import Home from "./pages/home/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import { Routes, Route, Outlet } from "react-router-dom"
import ForgotPasswordPage from "./pages/auth/forgot-password"
import CreatePasswordPage from "./pages/auth/create-password"
import EmailVerificationPage from "./pages/auth/email-verification"

function App() {
  return (
    <div>
      <Routes path='/'>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<GuestRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="create-password" element={<CreatePasswordPage />} />
          <Route path="email-verification" element={<EmailVerificationPage />} />
        </Route>
      </Routes>
    </div>
  )
}


const isAuthenticated = false;
const user = null;

const GuestRoute = () => {
  return (
    isAuthenticated ? <Navigate to='/profile' /> : <Outlet />
  )
}

export default App
