import React, { useState } from "react";
import { Motion, spring } from "react-motion"; 
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
          <i class="fa-solid fa-house text-light me-e"></i>
            <span className="sideMenuText mx-3">Home</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/kpis">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
          <i class="fa-solid fa-chart-column text-info me-2"></i>
            <span className="sideMenuText mx-3">KPIs</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/report">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fa-solid fa-flag text-warning me-2"></i>
            <span className="sideMenuText mx-3">Report</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/trend">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fas fa-chart-area text-primary me-2"></i>
            <span className="sideMenuText mx-3">Trend</span>
          </li>
        </Link>
        <Link className="my-2 p-2" to="/growth">
          <li className="list-group-item d-flex align-items-center" style={{ background: 'none', border: 'none' }}>
            <i className="fas fa-bullseye text-success me-2"></i>
            <span className="sideMenuText mx-3">Growth</span>
          </li>
        </Link>
      </ul>
      </div>

      {/* Bottom Sidebar Element */}
          <div className="bottomSideBarElement">
            <ul className={`d-flex align-items-center ${inactive ? "flex-column" : "flex-row mt-5 pt-5"}`}>
              <Link to="#">
              <li className="d-flex align-items-center mx-3 ">
                <i className="fa-solid fa-magnifying-glass text-secondary"></i>
              </li>
            </Link>
            <Link to="#">
              <li className="d-flex align-items-center mx-3">
                <i className="fa-solid fa-bell text-secondary"></i>
              </li>
            </Link>
            <Link to="#">
              <li className="d-flex align-items-center mx-3">
                <i className="fa-solid fa-gear text-secondary"></i>
              </li>
            </Link>
            <Link to="#">
              <li className="d-flex align-items-center mx-3">
                <i className="fa-solid fa-arrow-right-from-bracket text-secondary"></i>
              </li>
            </Link>
            </ul>
            
          </div>
    </div>
  );
}

export default SideMenuBar;
