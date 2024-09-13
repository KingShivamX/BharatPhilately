import React from "react"

import Home from "./components/dashboard/home/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import { Routes, Route, Outlet } from "react-router-dom"
import ForgotPasswordPage from "./pages/auth/forgot-password"
import CreatePasswordPage from "./pages/auth/create-password"
import EmailVerificationPage from "./pages/auth/email-verification"
import NotFoundPage from "./pages/page-not-found"
import DashboardLayout from "./layout/dashboard-layout"
import Community from "./components/dashboard/community/index"
import Notifications from "./components/dashboard/notifications/index"
import Messaging from "./components/dashboard/messaging/index"
import LandingPage from "./pages/landing-page"
import ProfilePage from "./components/dashboard/profile/Profile-page"

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className='flex flex-col overflow-hidden bg-white '>
        <Routes path='/'>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messaging" element={<Messaging />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>


          <Route path="/auth" element={<GuestRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="create-password" element={<CreatePasswordPage />} />
            <Route path="email-verification" element={<EmailVerificationPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
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
