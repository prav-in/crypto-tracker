import React from "react";
import "./css/ToggleSwitch.css";
const ToggleSwitch = ({ setDark }) => {
  // functions
  const handleToggle = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div className="toggle-container">
      <div className="rail" />
      <input type="checkbox" id="check" onClick={handleToggle} />
      <label htmlFor="check" className="ball"></label>
      <div className="indicator" />
    </div>
  );
};

export default ToggleSwitch;
