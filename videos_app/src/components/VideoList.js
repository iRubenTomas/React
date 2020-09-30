import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div className="ui container">
      <div className="ui header">
        <h3 style={{ color: "Black" }}>Videos:</h3>
      </div>
      <div
        className="ui relaxed divided list"
        style={{
          height: "600px",
          overflowY: "scroll",
          overflowX: "inherit",
        }}
      >
        {renderedList}
      </div>
    </div>
  );
};

export default VideoList;
