import AuthNavbar from "@/components/AuthNavbar";
import SideBar from "@/components/SideBar";
import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen bg-gray-300">
      <AuthNavbar />
      <div className="h-[calc(100%_-_90px)] flex">
        <SideBar />
        <div className="w-full p-4 overflow-scroll">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
