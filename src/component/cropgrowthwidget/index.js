// CropGrowthWidget.js
import React from "react";
import { PolarArea } from "react-chartjs-2";
import "../widget.css";

const CropGrowthWidget = () => {
  // Crop growth data for each season
  const cropGrowthData = {
    labels: ["Spring", "Summer", "Fall", "Winter"],
    datasets: [
      {
        label: "Crop Growth (%)",
        data: [65, 80, 45, 30], // Sample growth percentages
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Spring color
          "rgba(255, 206, 86, 0.6)", // Summer color
          "rgba(255, 159, 64, 0.6)", // Fall color
          "rgba(153, 102, 255, 0.6)", // Winter color
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="widget crop-growth-widget">
      <h3>Crop Growth by Season</h3>
      <div className="chat-widget-size">
        <PolarArea data={cropGrowthData} options={options} />
      </div>
    </div>
  );
};

export default CropGrowthWidget;
