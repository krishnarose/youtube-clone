import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar";
import Video from "./Pages/video/Video";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('0'); // Default category

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <MainContent 
            isSidebarVisible={isSidebarVisible} 
            toggleSidebar={toggleSidebar} 
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </BrowserRouter>
    </>
  );
};

const MainContent = ({ isSidebarVisible, toggleSidebar, selectedCategory, handleCategoryChange }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} handleCategoryChange={handleCategoryChange} />}
      <div className={`flex-1 ${isHomePage ? 'ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
          <Route path="/video/:selectedCategory/:videoId" element={<Video />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </>
  );
};

export default App;
