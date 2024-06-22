import React from "react";
import video from "../assets/videoo.mp4";



const Playvideo = () => {
  return (
    <>
      <div className=" ">
        <div className="">
          <video
            src={video}
            controls
            autoPlay
            className="mt-[80px] ml-[20px] rounded-xl w-[1000px] "
          />
          <div className="mt-4 w-[1000px]">
            <p className="lg:text-2xl lg:font-bold ml-[20px] ">
              Create YouTube Clone Using React JS | Build Complete Website Like
              YouTube In React JS 2024
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
                <img src="" alt="" />
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Playvideo;
