import React from "react";
import "./LogoShimmer.css"; // Import your CSS file

const LogoShimmer = () => {
  return (
    <div className="centered-container">
      <div className="logo-container">
        <div className="logo-shimmer"></div>
        <img
          src="https://play-lh.googleusercontent.com/f0g_tu3JSr8kmAIz-iQEOGFG7DOwe7c482IPVuA0V3K7OrgBbYCtj_hv0sB5Ub1wwoYS=w600-h300-pc0xffffff-pd"
          alt="Company Logo"
          className="logo-image"
        />
        <h1 className="slogan">
          Boost conversion rate from prospects and customers on WhatsApp
        </h1>
      </div>
    </div>
  );
};

export default LogoShimmer;
