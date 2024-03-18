// App.js
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Volunteer from "./components/Volunteer";
import Agency from "./components/Agency";
import { Route, Routes } from "react-router-dom";
//import Carousel from "./components/Carousal";

const App = () => {
  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </div>
  );
};

export default App;
