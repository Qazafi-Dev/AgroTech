// SoilHealthWidget.js
import React from "react";
import { Bubble } from "react-chartjs-2";
import "../widget.css";

const SoilHealthWidget = () => {
  // Sample data for soil health (pH level and nutrient density) for each month
  const soilData = {
    labels: "Soil Health",
    datasets: [
      {
        label: "Soil Health by Month",
        data: [
          { x: 1, y: 6.5, r: 10 }, // January
          { x: 2, y: 6.8, r: 12 }, // February
          { x: 3, y: 6.4, r: 9 }, // March
          { x: 4, y: 6.6, r: 11 }, // April
          { x: 5, y: 7.0, r: 13 }, // May
          { x: 6, y: 6.9, r: 12 }, // June
          { x: 7, y: 6.3, r: 8 }, // July
          { x: 8, y: 6.7, r: 10 }, // August
          { x: 9, y: 6.5, r: 9 }, // September
          { x: 10, y: 6.8, r: 12 }, // October
          { x: 11, y: 6.6, r: 10 }, // November
          { x: 12, y: 6.4, r: 8 }, // December
        ],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        ticks: {
          callback: function (value) {
            return [
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
            ][value - 1];
          },
          min: 1,
          max: 12,
        },
      },
      y: {
        title: {
          display: true,
          text: "pH Level",
        },
        min: 6.0,
        max: 7.5,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const month = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ][context.raw.x - 1];
            return `${month}: pH ${context.raw.y}, Nutrient Density ${context.raw.r}`;
          },
        },
      },
      legend: { display: false },
    },
  };

  return (
    <div className="widget soil-health-widget">
      <h3>Soil Health by Month</h3>
      <div className="chat-widget-size">
        <Bubble data={soilData} options={options} />
      </div>
    </div>
  );
};

export default SoilHealthWidget;
