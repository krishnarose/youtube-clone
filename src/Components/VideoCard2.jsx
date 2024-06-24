import React from 'react'

const VideoCard2 = ({ image, title, channel, views, time,defurl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[400px] ml-4 ">
    <img className="w-[450px] h-[250px]" src={image} alt={title} />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>
      <div className="flex items-center mt-2">
        <img
          className="h-10 w-10 rounded-full"
          src={defurl}
          alt={channel}
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{channel}</p>
          <p className="text-sm text-gray-600">{views} views • {time} </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoCard2
