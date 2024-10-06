import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Page/Home";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ServisOur from "./components/ServisOur/ServisOur";
import "./App.css";
import Footer from "./components/Footer/Footer";
import None from "./components/none/none";
import Reviews from "./components/Reviews/Rewiews";

function App() {
  return (
    <>
      <Header/>
      <AboutUs/>
      <ServisOur/>
      <None/>
      {/* <Reviews /> */}
      <Footer />
    </>
  );
}

export default App;
