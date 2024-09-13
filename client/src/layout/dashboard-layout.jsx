import { Outlet } from "react-router-dom";
import { Avatar, Input } from "antd";
import DashboardSidebar from "@/components/dashboard/dash-sidebar";
import {Link} from 'react-router-dom'
const isAuthenticated = false;
const user = {
  fullName: "Krish Mungase",
};
const DashboardLayout = () => {
  return (
    <div className="h-screen flex bg-[#FFFFFF]  flex-row">
      <DashboardSidebar />

      <div className="flex flex-col w-[calc(100vw_-60px)] lg:w-[calc(100vw_-250px)]">
        <div className="h-12 flex items-center justify-end px-6 space-x-6 ">
          <div>
            <Input.Search
              className="max-w-sm  sm:w-[300px]"
              placeholder="search"
            />
          </div>
          <Link to={'profile'}>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center space-x-1">
              <Avatar className="bg-primary">
                {user?.fullName[0].toUpperCase()}  
              </Avatar>
              <span className="text-primary text-sm font-medium hidden md:block">
                {/* {user?.fullName} */}
              </span>
            </div>
          </div>
          </Link>


        </div>

        <div className="h-[calc(100vh_-48px)] p-5 rounded-tl-md bg-[#f6f6f6e0]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}


export default DashboardLayout;