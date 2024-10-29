import React from "react";
import { Link } from "react-router-dom";
function Download(){
    return(
        <>
        <div className=" buttonContainer">
            <button className="p-3">
                <a href="google.com">  
                    <i className="fa-solid fa-cloud-arrow-down mx-2"></i> 
                </a>
                <span className="mx-1">Get Report</span>
            </button>
        </div>
        </>
    );
}

export default Download