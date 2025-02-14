"use client"; // Ensures this component only runs in the browser

import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Conditionally import jQuery & magnificPopup only on the client side
const isBrowser = typeof window !== "undefined";
const $ = isBrowser ? require("jquery") : null;
const magnificPopup = isBrowser ? require("magnific-popup") : null;

const VideoComponent = ({ src }) => {
  useEffect(() => {
    if (isBrowser && $(".video-wrap").length > 0) {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    }
  }, []);

  const renderVideo = () => {
    if (src.endsWith(".mp4") || src.includes("youtube.com") || src.includes("vimeo.com")) {
      return (
        <Link href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="video h-100">
      <div className="video-wrap h-100">
        <img src="/assets/images/video-image.png" alt="Video Thumbnail" className="video-img" />
        {renderVideo()}
      </div>
    </div>
  );
};

export default VideoComponent;
