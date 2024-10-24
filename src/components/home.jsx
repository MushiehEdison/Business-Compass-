import React from "react";
import KeyPerformanceIndicators from "./KPIs/KPI";

function Home() {
  return (
    <> 
      <div className="kpi-container">
        <div className="kpi-item">
          <KeyPerformanceIndicators />
        </div>
        <div className="kpi-item">
          <KeyPerformanceIndicators />
        </div>
        <div className="kpi-item">
          <KeyPerformanceIndicators />
        </div>
      </div>
    </>
  );
}

export default Home;
