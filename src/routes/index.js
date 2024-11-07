import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ContactUs from "../pages/contactus";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

export default function RouteManager() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
