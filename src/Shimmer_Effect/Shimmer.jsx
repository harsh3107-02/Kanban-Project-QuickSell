import React from "react";
import "./Shimmer.css";

const ShimmerEffect = () => {
  return (
    <div className="shimmer-container">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="box">
          <div className="box-row">
            <div className="linear-box" />
          </div>
          <div className="box-row">
            <div className="linear-box" />
          </div>
          <div className="box-row">
            <div className="small-box" />
            <div className="box-col">
              <div className="small-box" />
              <div className="small-box" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
