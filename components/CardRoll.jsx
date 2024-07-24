import React from 'react';
import Image from 'next/image';

export const CardRoll = ({ onSelectVideo, playlistItems }) => {
  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex">
      <div className="w-full">
        <ul className="list-none">
          {playlistItems.map((item) => (
            <li
              key={item.id}
              className="mb-4 cursor-pointer"
              onClick={() => onSelectVideo(item.id)}
            >
              <div className="relative ">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover shadow-xl"
                  src={item.thumbnail}
                  width={320}
                  height={180}
                  alt="Thumbnail"
                />
              </div>
              <div className="justify-center">
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-xs text-gray-500">{item.channel}</div>
                <div className="text-xs text-gray-500">{item.views} views • {item.uploaded}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


