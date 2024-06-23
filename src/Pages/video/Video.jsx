import React from "react";
import Playvideo from "../../Components/Playvideo";
import Recommended from "../../Components/Recommended";

const Video = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Playvideo />
        </div>
        <div className="mt-[80px] w-[480px]">
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default Video;
