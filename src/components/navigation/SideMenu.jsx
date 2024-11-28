import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import '../../App.css'
function SideMenuBar() {
  const [inactive, setInactive] = useState(true);

  return (
    <div
      onMouseOver={() => setInactive(false)}
      onMouseOut={() => setInactive(true)}
      className={`SideMenuSection ${inactive ? "inactive" : ""} `}
    >
      <div>
        <ul className="list-group w-100 mt-5 pt-5">
        <Link className="my-2 p-2" to="/">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i class="fa-solid fa-house text-secondary me-e"></i>
            <span className="sideMenuText mx-3">Home</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/analytics">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
          <i class="fa-solid fa-chart-column text-info me-2"></i>
            <span className="sideMenuText mx-3">Analytics</span>
          </li>
        </Link>
       
        <Link className="my-2 p-2" to="/industryinsight">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fas fa-bullseye text-success me-2"></i>
            <span className="sideMenuText mx-3">Industry <br /> insights</span>
          </li>
        </Link> 
        <Link className="my-2 p-2" to="/riskmanagement">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fas fa-chart-area text-primary me-2"></i>
            <span className="sideMenuText mx-3">Risk <br />Management</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/report">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fa-solid fa-flag text-warning me-2"></i>
            <span className="sideMenuText mx-3">Report &<br /> Insight</span>
          </li>
        </Link> 
        <div className="my-5">
          <Link className="my-2 p-2" to="#">
           <li className="d-flex align-items-center mx-3">
              <i className="fa-solid fa-gear text-secondary"></i>
              <span className="sideMenuText mx-3">Setting</span>
            </li>
         </Link>
          <Link className="my-2 p-2" to="#">
            <li className="d-flex align-items-center mx-3">
               <i className="fa-solid fa-arrow-right-from-bracket text-secondary"></i>
               <span className="sideMenuText mx-3">Logout</span>
            </li>
          </Link>
        </div>
        
      </ul>
      </div>
    </div>
  );
}

export default SideMenuBar;
