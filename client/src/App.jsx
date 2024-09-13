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
import ProtectedRoute from "./layout/protectedroute"
import ProfilePage from "./pages/Profile/Profile"


const user = {
  fullname: "Krish Mungase"
};
const isAuthenticated = true;
function App() {

  return (
    <div className="min-h-screen w-full">
      <div className='flex flex-col overflow-hidden bg-white '>
        <Routes path='/' >
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
              <DashboardLayout />
            </ProtectedRoute>}
          >
            <Route
              path="home"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
                  <Home />
                </ProtectedRoute>
              }
            />            
            <Route
              path="community"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="notifications"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="messaging"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
                  <Messaging />
                </ProtectedRoute>
              }
            />

            <Route path="profile" element={
               <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
               <ProfilePage />
             </ProtectedRoute>
            }
            />

          </Route>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="create-password" element={<CreatePasswordPage />} />
            <Route path="email-verification" element={<EmailVerificationPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div >
  )
}

export default App
