import DesktopDashboardSidebar from "./desktop-dashboard-sidebar";
import MobilDashboardSidebar from "./mobile-sidebar";


const DashboardSidebar = () => {
  return (
    <div className="w-[60px] lg:w-[250px]">
      <div className="bg-[white] h-full py-8 w-full">
        <MobilDashboardSidebar />
        <DesktopDashboardSidebar />
      </div>
    </div>
  );
};

export default DashboardSidebar;
