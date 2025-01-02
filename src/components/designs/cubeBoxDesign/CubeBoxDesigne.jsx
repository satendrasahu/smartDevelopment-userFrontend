import React from "react";
import "./style.css";

const CubeBoxDesign = () => {
  return (
    <div className="container">
      {[...Array(3)].map((_, cubeIndex) => (
        <div className="cube" key={cubeIndex}>
          {[-1, 0, 1].map((x, rowIndex) => (
            <div style={{ "--x": x, "--y": 0 }} key={rowIndex}>
              {[3, 2, 1].map((i) => (
                <span style={{ "--i": i }} key={i}></span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CubeBoxDesign;
