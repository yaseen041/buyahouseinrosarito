import React from 'react';
import './Loader.css'; // Assuming the CSS file for the animation is Loader.css

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner-border text-primary" role="status" style={{width:"3rem",height:"3rem"}}  >
        <span className="visually-hidden">Loading...</span>
      </div>
      {/* <p>Loading data...</p> */}
    </div>
  );
};

export default Loader;
