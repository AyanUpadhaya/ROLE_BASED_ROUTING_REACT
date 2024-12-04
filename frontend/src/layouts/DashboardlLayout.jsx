import { Outlet } from "react-router-dom";
import Sidebar from "../components/commons/dashboard/ui/Sidebar";
import Nav from "../components/commons/dashboard/nav/Nav";

function DashboardlLayout() {
  return (
    <div className="min-vh-100 overflow-hidden">
      <div className="vh-100 d-flex flex-row">
        <Sidebar></Sidebar>
        <div className="flex-fill h-full overflow-hidden">
          <div className="w-full h-full">
            <Nav></Nav>
            <main className="h-full overflow-y-scroll p-2">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardlLayout;
