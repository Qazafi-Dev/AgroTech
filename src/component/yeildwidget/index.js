// YieldPredictionWidget.js
import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Tooltip from "@mui/material/Tooltip";
import "../widget.css";

const YieldPredictionWidget = () => {
  const [yieldData, setYieldData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Yield Prediction (kg/acre)",
        data: [
          900, 1050, 1150, 1000, 1300, 1250, 1400, 1350, 1200, 1450, 1100, 1300,
        ],
        backgroundColor: "#3a5f0b",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate data update by modifying random data points each month
      setYieldData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: prevData.datasets[0].data.map(
              (value) => value + Math.round(Math.random() * 100 - 50)
            ),
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget yield-widget">
      <h3>Yield Prediction</h3>
      <Tooltip
        title="Predicted monthly yield based on soil and weather data"
        arrow
      >
        <p>Expected Yield: 1200 kg/acre</p>
      </Tooltip>
      <div className="chat-widget-size">
        <Bar
          data={yieldData}
          options={{
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
                  text: "Month",
                },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true },
            },
          }}
        />
      </div>
    </div>
  );
};

export default YieldPredictionWidget;
