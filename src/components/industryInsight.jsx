import React from "react";
import SideMenuBar from "./navigation/SideMenu";
import TopNavBar from "./navigation/TopNavBar";
import Alert from "./PageComponents/Alert";

function IndustryInsight() {
  return (
    <>
    {/* Components/////////////////////////////////////////////////////////////// */}
    <div className="alerts">
            <Alert/>
          </div>
          <div className="navigation">
            <TopNavBar/>
            <SideMenuBar/>
          </div>
   <div className="growthSection p-4">
        Growth Page
        </div>
  </>
  );
}
export default IndustryInsight;