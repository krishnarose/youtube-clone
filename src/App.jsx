import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
