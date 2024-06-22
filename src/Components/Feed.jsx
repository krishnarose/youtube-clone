import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const videoData = [
  {
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'WWDC24: Design Live Activities for Apple Watch | Apple',
    channel: 'Apple Developer',
    views: '40K',
    time: '10 days',
  },
  {
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },{
    image: 'https://www.apple.com/in/watch/images/overview/select/product_s9__b8uw2qgcgw1y_xlarge.png',
    title: 'Another Video Title Here',
    channel: 'Some Channel',
    views: '100K',
    time: '5 days',
  },
  // Add more video data objects here
];

const Feed = () => {
  return (
    <Link to={`video/20/4521`} className="flex-1 p-4  grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[80px]">
      {videoData.map((video, index) => (
        <VideoCard
          key={index}
          image={video.image}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
        />
      ))}
    </Link>
  );
};

export default Feed;
