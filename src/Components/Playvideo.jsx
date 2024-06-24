import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import img from "../assets/avtar.jpg";

const Playvideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=AIzaSyDjfPBzhhwWCzlqk3rYkyH1GtUkpT9GJro`
        );
        setVideoData(response.data.items[0]);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, [videoId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=AIzaSyDjfPBzhhwWCzlqk3rYkyH1GtUkpT9GJro`
        );
        setComments(response.data.items);
      } catch (error) {
        console.log("Error fetching comments", error);
      }
    };
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    if (videoData) {
      const fetchChannelData = async () => {
        try {
          const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${videoData.snippet.channelId}&key=AIzaSyDjfPBzhhwWCzlqk3rYkyH1GtUkpT9GJro`
          );
          setChannelData(response.data.items[0]);
        } catch (error) {
          console.log("Error fetching channel data", error);
        }
      };
      fetchChannelData();
    }
  }, [videoData]);

  if (!videoData || !channelData) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = videoData;
  const channelStatistics = channelData.statistics;
  const channelSnippet = channelData.snippet;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num;
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="p-4 mt-[80px] w-[1000px]">
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl w-full h-[500px]"
        ></iframe>
        <div className="mt-4">
          <p className="text-2xl font-bold">{snippet.title}</p>
          <p className="text-sm text-gray-500">
            {new Date(snippet.publishedAt).toDateString()}
          </p>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <img
              src={channelSnippet.thumbnails.default.url}
              alt="channelImg"
              className="rounded-full w-[40px]"
            />
            <div className="ml-4">
              <p className="text-xl font-semibold">{snippet.channelTitle}</p>
              <p className="text-sm text-gray-500">
                {formatNumber(channelStatistics.subscriberCount)} subscribers
              </p>
            </div>
            <button className="bg-black text-white py-1 px-3 font-semibold rounded-full ml-4">
              Subscribe
            </button>
          </div>
          <div className="flex items-center ml-auto">
            <div className="flex items-center bg-gray-200 px-3 py-2 rounded-full">
              <button className="text-2xl">
                <AiOutlineLike />
              </button>
              <div className="font-semibold ml-2">
                <p>{formatNumber(statistics.likeCount)}</p>
              </div>
              <button className="text-2xl ml-3">
                <BiSolidDislike />
              </button>
            </div>
            <button className="flex items-center bg-gray-200 px-3 py-2 rounded-full ml-5 text-2xl">
              <IoIosShareAlt />
              <span className="ml-2 text-xl font-bold">Share</span>
            </button>
            <button className="flex items-center bg-gray-200 px-3 py-2 rounded-full ml-5 text-2xl">
              <MdOutlineFileDownload />
              <span className="ml-2 text-xl font-bold">Download</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg">
            {showFullDescription
              ? snippet.description
              : `${snippet.description.substring(0, 150)}...`}
            <button className="text-blue-500 ml-2" onClick={toggleDescription}>
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start mt-4">
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt="comment author"
                className="rounded-full w-[40px] h-[40px] mr-4"
              />
              <div>
                <p className="font-semibold">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(
                    comment.snippet.topLevelComment.snippet.publishedAt
                  ).toDateString()}
                </p>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="flex items-center mt-2">
                  <button className="flex items-center">
                    <AiOutlineLike />
                    <span className="ml-1">
                      {formatNumber(
                        comment.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
