import React from 'react'

import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import dashboardLinks from '@/config/dashboard-links';

import { cn } from '@/lib/utils';

const DesktopDashboardSidebar = () => {
  return (
    <div className="hidden lg:block text-black">
      <div className="flex items-center justify-start px-6">
        <Link className="text-2xl font-bold" to="/">
        <div  className="text-5xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
            Bharat Philately
          </div>
        </Link>
      </div>

      <div className="px-4 h-[calc(100vh_-110px)] w-full  mt-8 flex justify-between flex-col">
        <div className="flex space-y-1 items-center flex-col justify-center">
          {
            dashboardLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-4 py-2 hover:text-white hover:bg-gradient-to-br from-teal-500 to-cyan-600 transition-all rounded-lg w-full",
                    isActive && "  text-white bg-gradient-to-br from-teal-500 to-cyan-600"
                  )
                }
              >
                <link.icon className="size-4 " />
                <span className="pl-4 text-[14px]   font-light tracking-wider">
                  {link.title}
                </span>
              </NavLink>
            ))}
        </div>

        <div className="border-t pt-2">
          <button
            className="flex items-center px-4 py-2 hover:bg-gradient-to-br from-teal-600 to-cyan-600 hover:text-white transition-all rounded-lg w-full"
          >
            <AiOutlineLogout className="size-6 " />
            <span className="text-[13px]  pl-4 font-light  tracking-wider">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div >
  )
}

export default DesktopDashboardSidebar