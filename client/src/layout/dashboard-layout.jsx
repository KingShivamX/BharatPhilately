import { Outlet } from "react-router-dom";
import { Avatar, Input } from "antd";
import DashboardSidebar from "@/components/dashboard/dash-sidebar";
import { Link } from "react-router-dom";

const isAuthenticated = false;
const user = {
  fullName: "Krish Mungase",
};
const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-row">
      <DashboardSidebar />

      <div className="flex flex-col w-[calc(100vw_-60px)] lg:w-[calc(100vw_-250px)]">
        <div className="h-12 flex items-center justify-between px-6 space-x-6 border-b">
          <div>
            <Input.Search
              className="max-w-sm sm:w-[300px]"
              placeholder="search"
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            {
              !isAuthenticated && (
                <>
                  <Link
                    to="/auth/login"
                    className="px-4 py-[0.19rem] text-sm text-center bg-primary hover:bg-[#3d7e9c] text-white rounded-full transition-all duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/auth/register"
                    className="px-4 py-[0.19rem] text-sm text-center bg-primary hover:bg-[#3d7e9c] text-white rounded-full transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )
            }
            {
              isAuthenticated && (
                <div className="flex items-center justify-center space-x-1">
                  <Avatar className="bg-primary">
                    {user?.fullName[0].toUpperCase()}
                  </Avatar>
                  <span className="text-primary text-sm font-medium hidden md:block">
                    {user?.fullName}
                  </span>
                </div>
              )
            }
          </div>

        </div>

        <div className="h-[calc(100vh_-48px)] p-5 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  )
}


export default DashboardLayout;