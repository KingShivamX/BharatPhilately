import React from 'react'

import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import dashboardLinks from '@/config/dashboard-links';

import { cn } from '@/lib/utils';

const DesktopDashboardSidebar = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center justify-start px-6">
        <Link className="text-2xl font-bold text-white" to="/">
          BharatPhilately
        </Link>
      </div>

      <div className="px-4 h-[calc(100vh_-120px)] w-full  mt-8 flex justify-between flex-col">
        <div className="flex space-y-1 items-center flex-col justify-center">
          {
            dashboardLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-4 py-3 hover:bg-secondary transition-all rounded-lg w-full",
                    isActive && "bg-secondary"
                  )
                }
              >
                <link.icon className="size-6 text-white" />
                <span className="pl-4 text-lg text-white font-light tracking-wider">
                  {link.title}
                </span>
              </NavLink>
            ))}
        </div>

        <div className="border-t pt-2">
          <button
            className="flex items-center px-4 py-3 hover:bg-secondary transition-all rounded-lg w-full"
          >
            <AiOutlineLogout className="size-6 text-white" />
            <span className="text-lg text-white pl-4 font-light tracking-wider">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div >
  )
}

export default DesktopDashboardSidebar