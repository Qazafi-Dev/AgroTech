// YieldProductionWidget.js
import React from "react";
import { Bar } from "react-chartjs-2";
import "../widget.css";

const YieldProductionWidget = () => {
  // Sample data for different crops
  const yieldData = {
    labels: ["Wheat", "Corn", "Rice", "Soybean", "Barley", "Oats"],
    datasets: [
      {
        label: "Yield Production (kg/acre)",
        data: [1200, 1500, 1100, 1300, 900, 800],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Wheat
          "rgba(54, 162, 235, 0.6)", // Corn
          "rgba(255, 206, 86, 0.6)", // Rice
          "rgba(75, 192, 192, 0.6)", // Soybean
          "rgba(153, 102, 255, 0.6)", // Barley
          "rgba(255, 159, 64, 0.6)", // Oats
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Yield (kg/acre)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Crops",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="widget yield-production-widget">
      <h3>Yield Production by Crop</h3>
      <div className="chat-widget-size">
        <Bar data={yieldData} options={options} />
      </div>
    </div>
  );
};

export default YieldProductionWidget;
