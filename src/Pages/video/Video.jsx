import React from "react";
import Playvideo from "../../Components/Playvideo";
import Recommended from "../../Components/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId,selectedCategory } = useParams();
  return (
    <>
      <div className="flex">
        <div>
          <Playvideo videoId={videoId} />
        </div>
        <div className="mt-[80px] w-[480px]">
          <Recommended categoryId={selectedCategory} />
        </div>
      </div>
    </>
  );
};

export default Video;
