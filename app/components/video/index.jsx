import React, { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";
// import "magnific-popup/dist/magnific-popup.css";
import Link from "next/link";

const VideoComponent = ({ src }) => {

  useEffect(() => {
    if ($('div').hasClass('video-wrap')) {
      $('.popup-youtube').magnificPopup({
        type: 'iframe',
        
        
      });
    }
  }, []);
  
  
  const renderVideo = () => {
    if (src.endsWith(".mp4")) {
      return (
        <Link href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </Link>
      );
    } else if (src.includes("youtube.com")) {
      return (
        <Link href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </Link>
      );
    } else if (src.includes("vimeo.com")) {
      // If it's a Vimeo URL, return a Vimeo link
      return (
        <Link href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </Link>
      );
    } else {
      return null; 
    }
  };

  return (
    <div className="video h-100">
      <div className="video-wrap h-100">
        <img src="/assets/images/image-box/video-2.jpg" alt="" />
        {renderVideo()}
      </div>
    </div>
  );
};

export default VideoComponent;
