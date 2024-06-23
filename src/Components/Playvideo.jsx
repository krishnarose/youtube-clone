import React from "react";
import video from "../assets/videoo.mp4";
import img from "../assets/avtar.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Playvideo = ({videoId}) => {
  return (
    <>
      <div className=" ">
        <div className="">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="mt-[80px] ml-[20px] rounded-xl w-[1000px] h-[500px]"
          ></iframe>
          <div className="mt-4 w-[1000px]">
            <p className="lg:text-2xl lg:font-bold ml-[20px] ">
              Create YouTube Clone Using React JS | Build Complete Website Like
              YouTube In React JS 2024
            </p>
          </div>

          <div className="flex items-center ">
            <div className="flex items-center px-6 py-2">
              <img
                src={img}
                alt="channelImg "
                className="rounded-full w-[40px]"
              />
              <p className="text-xl font-semibold px-4"> GreatStack</p>
              <p className="bg-zinc-200 py-1 px-3 font-semibold rounded-full">
                Join
              </p>
              <p className="bg-black py-1 px-3 font-semibold rounded-full text-white ml-3">
                Subscribe
              </p>
            </div>
            <div className="ml-[230px] items-center flex ">
              <div className="flex items-center bg-zinc-200 px-3 py-2 rounded-full">
                <button className="text-2xl">
                  <AiOutlineLike />{" "}
                </button>
                <div className="font-semibold ml-2">
                  <p>200k</p>
                </div>
                <div>
                  <button className="text-2xl ml-3">
                    <BiSolidDislike />{" "}
                  </button>
                </div>
              </div>
              <div className="flex items-center bg-zinc-200 px-3 py-2 rounded-full ml-5">
                <button className="text-2xl">
                  {" "}
                  <IoIosShareAlt />{" "}
                </button>
                <div className="text-xl font-bold ml-2">share</div>
              </div>

              <div className="flex items-center bg-zinc-200 px-3 py-2 rounded-full ml-5">
                <button className="text-2xl">
                  {" "}
                  <MdOutlineFileDownload />{" "}
                </button>
                <div className="text-xl font-bold ml-2">Dwonload</div>
              </div>
            </div>
          </div>

          {/* COMMENT  STARTED */}
          <p className="text-2xl font-bold ml-4 mt-4 ">COMMENT</p>
          <div className="ml-4 mt-4">
            <div className="mt-4 flex items-center">
              <img src={img} alt="" className="rounded-full w-[40px]" />
              <p className="font-bold ml-4">krishnarose2001@</p>
              <p className="ml-2"> 5 month ago</p>
            </div>
            <div className="w-[1000px] text-xl font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, tempore eius harum impedit asperiores reprehenderit,
              molestiae a iste atque ipsum debitis quis eos placeat consequuntur
              non! Architecto autem eius laboriosam.
            </div>
          </div>
          <div className="ml-4 mt-4">
            <div className="mt-4 flex items-center">
              <img src={img} alt="" className="rounded-full w-[40px]" />
              <p className="font-bold ml-4">krishnarose2001@</p>
              <p className="ml-2"> 1 month ago</p>
            </div>
            <div className="w-[1000px] text-xl font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, tempore eius harum impedit asperiores reprehenderit,
              molestiae a iste atque ipsum debitis quis eos placeat consequuntur
              non! Architecto autem eius laboriosam.
            </div>
          </div>
          {/* COMMENT EDEDD  */}
        </div>
      </div>
    </>
  );
};

export default Playvideo;
