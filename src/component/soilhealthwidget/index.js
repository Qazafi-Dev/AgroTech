// SoilHealthWidget.js
import React, { useState } from "react";
import "chart.js/auto";
import { Collapse, Button } from "@mui/material";
import "../widget.css";

const SoilHealthWidget = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="widget soil-widget">
      <h3>Soil Health</h3>
      <p>Moisture Level: 60%</p>
      <Button
        onClick={() => setExpanded(!expanded)}
        variant="contained"
        color="success"
      >
        {expanded ? "Hide Details" : "Show Details"}
      </Button>
      <Collapse in={expanded}>
        <p>pH Level: 6.5</p>
        <p>Nutrients: Balanced</p>
      </Collapse>
    </div>
  );
};

export default SoilHealthWidget;
