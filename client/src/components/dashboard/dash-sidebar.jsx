import DesktopDashboardSidebar from "./desktop-dashboard-sidebar";
import MobilDashboardSidebar from "./mobile-sidebar";


const DashboardSidebar = () => {
  return (
    <div className="w-[50px] lg:w-[250px]">
      <div className="bg-primary h-full py-8 w-full">
        <MobilDashboardSidebar />
        <DesktopDashboardSidebar />
      </div>
    </div>
  );
};

export default DashboardSidebar;
