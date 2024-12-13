"use client"
import React, { useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa';
interface Props{
    url:string
    title:string
}
const VideoViewer = ({url, title}:Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
         className="flex items-center justify-center gap-1 hover:text-purple"
        >
          {title} <FaLocationArrow />
        </button>
  
        {isOpen && (
          <div className="fixed inset-0 bg-black/10 bg-opacity-60 backdrop-blur flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
  
              <div className="p-4">
                <video
                  src={url}
                  controls
                  className="rounded-lg w-full max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default VideoViewer
