import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/navigation/TopNavBar";
import SideMenuBar from "./components/navigation/SideMenu";
import KPIs from "./components/KPIs";
import Report from "./components/Report";
import Trend from "./components/Trend";
import Growth from "./components/Growth";
import Home from "./components/home";
function App() {
  return (
    <Router >
      <div className=" " style={{color:'black'}}>
        <SideMenuBar />
        <div className="content flex-grow-1">
          <TopNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kpis" element={<KPIs />} />
            <Route path="/report" element={<Report />} />
            <Route path="/trend" element={<Trend />} />
            <Route path="/growth" element={<Growth />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
