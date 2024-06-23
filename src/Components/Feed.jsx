import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=AIzaSyDjfPBzhhwWCzlqk3rYkyH1GtUkpT9GJro`
        );
        setData(response.data.items);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex-1 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[80px]">
      {data.map((video, index) => (
        <Link
          to={`video/${video.id}`}
          key={index}
        >
          <VideoCard
            image={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            views={video.statistics.viewCount}
            time={video.snippet.publishedAt}
          />
        </Link>
      ))}
    </div>
  );
};

export default Feed;
