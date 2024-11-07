import React from "react";
import Sidebar from "../../component/sidebar";
import WeatherWidget from "../../component/weatherwidget";
import SoilHealthWidget from "../../component/soilhealthwidget";
import CropGrowthWidget from "../../component/cropgrowthwidget";
import YieldPredictionWidget from "../../component/yeildwidget";

export default function Home() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <div className="main-content">
        <header className="header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, User!</p>
        </header>
        <div className="dashboard">
          <WeatherWidget />
          <SoilHealthWidget />
          <CropGrowthWidget />
          <YieldPredictionWidget />
        </div>
      </div>
    </div>
  );
}
