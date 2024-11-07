// WeatherWidget.js
import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../widget.css";

const WeatherWidget = () => {
  const [temperature, setTemperature] = useState(25);
  const [data, setData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 24, 25, 23, 26],
        borderColor: "#3a5f0b",
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = Math.floor(Math.random() * 10) + 20;
      setTemperature(newTemp);
      setData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data.slice(1), newTemp],
          },
        ],
      }));
    }, 3000);
    console.log(data);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget weather-widget">
      <h3>Weather Forecast</h3>
      <p>Current Temp: {temperature}°C</p>
      <div className="chat-widget-size">
        <Line
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default WeatherWidget;
