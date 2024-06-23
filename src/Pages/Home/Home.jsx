import React from "react";
import Feed from "../../Components/Feed";

const Home = ({ selectedCategory }) => {
  return (
    <div>
      <Feed selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
