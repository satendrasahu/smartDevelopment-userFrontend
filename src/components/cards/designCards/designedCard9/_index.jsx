import React from 'react';
import './style.css'; // Import the corresponding CSS file for styling

const DesignedCard9 = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
              <path
                d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
              ></path>
              <path
                d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
              ></path>
              <path
                d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="glass"></div>
        <div className="content">
          <span className="title">UIVERSE (3D UI)</span>
          <span className="text">Create, share, and use beautiful custom elements made with CSS</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button className="social-button social-button1">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="..." />
              </svg>
            </button>
            <button className="social-button social-button2">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="..." />
              </svg>
            </button>
            <button className="social-button social-button3">
              <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="..." />
              </svg>
            </button>
          </div>
          <div className="view-more">
            <button className="view-more-button">View more</button>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedCard9;
