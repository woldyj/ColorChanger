import React, { useState, useEffect } from "react";
import ColorButton from "./ColorButton";
import '../css/App.css';

const colors = [
  'crimson',
  'deeppink',
  'deepskyblue',
  'gold',
  'lightgrey',
  'pink',
  'orange',
  'mediumturquoise',
  'lemonchiffon',
  'indigo',
];

function App() {
  const [activeColor, setActiveColor] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    setActiveColor(color);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = activeColor;
  }, [activeColor])

  return (
    <div id="app" style={{transition: "background-color .2s ease", textAlign: "center"}}>
      <h1 id="current-color">{activeColor}</h1>

      <div className="colors">
        {colors.map(color => (
          <ColorButton 
            key={color}
            color={color}
            active={color === activeColor}
            onClick={() => setActiveColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
