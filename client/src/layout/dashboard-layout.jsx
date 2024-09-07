import { Outlet } from "react-router-dom";
import { Avatar, Input } from "antd";
import DashboardSidebar from "@/components/dashboard/dash-sidebar";

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
            <div className="flex items-center justify-center space-x-1">
              <Avatar className="bg-primary">
                {user?.fullName[0].toUpperCase()}
              </Avatar>
              <span className="text-primary text-sm font-medium hidden md:block">
                {user?.fullName}
              </span>
            </div>
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