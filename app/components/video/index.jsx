import React, { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";

const VideoComponent = ({ src }) => {
  useEffect(() => {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "https://player.vimeo.com/video/%id%?autoplay=1",
          },
        },
      },
      // Check the href value to apply a custom solution for mp4 files
      callbacks: {
        open: function () {
          const href = this.st.el.attr("href");
          console.log("Opening video:", href);
          // Check if the link is a .mp4 file
          if (href && href.endsWith(".mp4")) {
            // Modify the type to 'video' for .mp4 files
            this.content.find("iframe").remove(); // Remove iframe for mp4
            this.content.append(`<video src="${href}" controls autoplay></video>`);
            this.updateStatus("ready"); // Update Magnific Popup status
            this.st.mainClass = "mfp-iframe";
          }
        },
      },
    });
  }, []);

  // Determine if src is a YouTube or Vimeo URL, or an .mp4 file
  const renderVideo = () => {
    if (src.endsWith(".mp4")) {
      // If it's an MP4 file, return a local video player
      return (
        <a href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </a>
      );
    } else if (src.includes("youtube.com")) {
      // If it's a YouTube URL, return a YouTube link
      return (
        <a href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </a>
      );
    } else if (src.includes("vimeo.com")) {
      // If it's a Vimeo URL, return a Vimeo link
      return (
        <a href={src} className="popup-youtube">
          <div className="icon">
            <i className="flaticon-play" />
          </div>
        </a>
      );
    } else {
      return null; // If no valid video URL, render nothing
    }
  };

  return (
    <div className="video">
      <div className="video-wrap">
        <img
          src="/elrealestate/assets/images/image-box/video-2.jpg"
          alt="Video Thumbnail"
        />
        {renderVideo()}
      </div>
    </div>
  );
};

export default VideoComponent;
