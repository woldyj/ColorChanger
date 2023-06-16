import React from "react";

function ColorButton({ color, active, onClick }) {
  return (
    <button 
      style={{backgroundColor: color, border: active ? '7px solid green' : '7px solid #fff'}} 
      className={`color-button ${active ? 'active' : ''}`}
      onClick={onClick}
    />
  );
}

export default ColorButton;
