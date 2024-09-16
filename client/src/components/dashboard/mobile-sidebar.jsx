import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import dashboardLinks from '@/config/dashboard-links';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MobilDashboardSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth/login');
    toast.success("Logout Successfully")
  }
  return (
    <div className="lg:hidden">
      <Link className="hidden md:block text-2xl font-bold text-white" to="/">
        BharatPhilately
      </Link>

      <div className="flex items-center h-[calc(100vh_-120px)] justify-between flex-col mt-8 space-y-6">
        <div className="flex items-center flex-col justify-center space-y-4">
          {dashboardLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-1 hover:bg-secondary transition-all rounded-lg",
                  isActive && "bg-secondary"
                )
              }
            >
              <link.icon className="size-6 text-white" />
            </NavLink>
          ))}
        </div>

        <div className="border-t pt-2">
          <button
            onClick={handleLogout}
            className="flex items-center px-2 py-1 hover:bg-secondary transition-all rounded-lg"
          >
            <AiOutlineLogout className="size-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobilDashboardSidebar