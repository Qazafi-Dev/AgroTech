// CropGrowthWidget.js
import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import "../widget.css";

const CropGrowthWidget = () => {
  const [growth, setGrowth] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowth((prevGrowth) => Math.min(prevGrowth + Math.random() * 5, 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget crop-widget">
      <h3>Crop Growth</h3>
      <p>Growth Stage: {Math.round(growth)}%</p>
      <LinearProgress variant="determinate" value={growth} />
    </div>
  );
};

export default CropGrowthWidget;
