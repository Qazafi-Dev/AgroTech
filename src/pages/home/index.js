import React from "react";
import Sidebar from "../../component/sidebar";
import WeatherWidget from "../../component/weatherwidget";
import SoilHealthWidget from "../../component/soilhealthwidget";
import CropGrowthWidget from "../../component/cropgrowthwidget";
import YieldPredictionWidget from "../../component/yeildwidget";
import "./home.css";
import Header from "../../component/header";

export default function Home() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <div className="main-content">
        {/* <Header title="Agriculture Dashboard" userName="Qazafi Sheikh" /> */}
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
