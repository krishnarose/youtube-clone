import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar";
import Video from "./Pages/video/Video";

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
          <MainContent isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
      </BrowserRouter>
    </>
  );
};

const MainContent = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />}
      <div className={`flex-1 ${isHomePage ? 'ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:categoryId/:videoId" element={<Video/>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </>
  );
};

export default App;

