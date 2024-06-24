import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";

// Helper function to format views
const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M views';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K views';
  } else {
    return views + ' views';
  }
};

// Helper function to format publish time
const formatTime = (publishTime) => {
  const date = new Date(publishTime);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};

const Feed = ({ selectedCategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${selectedCategory}&key=AIzaSyDjfPBzhhwWCzlqk3rYkyH1GtUkpT9GJro`
        );
        setData(response.data.items);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex-1 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[80px]">
      {data.map((video, index) => (
        <Link to={`video/${selectedCategory}/${video.id}`} key={index}>
          <VideoCard
            image={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            views={formatViews(video.statistics.viewCount)}
            time={formatTime(video.snippet.publishedAt)}
          />
        </Link>
      ))}
    </div>
  );
};

export default Feed;
