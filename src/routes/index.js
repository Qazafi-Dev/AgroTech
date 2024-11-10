// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ContactUs from "../pages/contactus";
import Sidebar from "../component/sidebar";
import Header from "../component/header";
import "./route.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Sidebar /> */}
        <div className="main-content">
          <Header title="Agriculture Dashboard" userName="Qazafi Sheikh" />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<ContactUs />} />
              {/* <Route path="/soil" element={<ContactUs />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
