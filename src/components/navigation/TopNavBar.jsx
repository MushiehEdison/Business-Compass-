import React from "react";
import image from "../navigation/profile.jpeg";

function TopNavBar() {
  return (
    <nav className="TopNavBar d-flex justify-content-between align-items-center text-light py-3 px-4">
      <div className="logo fs-1 fw-bold"><i class="fa-solid fa-diagram-project"></i> Gram </div>
      <div className="TopNavbarElements d-flex align-items-center">
        <div className="CompanyName fs-4 me-3">GooGle</div>
        <div className="CompanyLogo">
          <img src={image} className="profileImage rounded-circle" alt="Company logo" style={{width: '60px'}} />
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
