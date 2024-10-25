import React from "react";
import KeyPerformanceIndicators from "./KPIs/KPI";
import ActionableRec from "./Recommendations/ActionableRecom";

function Home() {
  return (
    <>
    <div style={{}}>
      {/* Key Performance indicators ////////////////////////////////////////////// */}
    <div className="section-1">
    <div className="title m-3">
            <span className="h2">Company Performance </span>
         </div>
      <div className="container">
              <div className="kpi-item">
                <KeyPerformanceIndicators />
              </div>
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
    </div>
     {/* Actionalble Recommendations ///////////////////////////////////////////// */}
      <div className="section-2">
        <div className="title m-3">
            <span className="h2">Recommendations</span>
         </div>
        <div className="container">
            <div className="RecommendationSection">
               <ActionableRec />
            </div>
            <div className="RecommendationSection">
                <ActionableRec />
             </div>
            </div>
      </div>
    </div>   
    </>
  );
}

export default Home;
