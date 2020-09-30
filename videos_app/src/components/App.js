import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Trap music");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <p />
      <h1 className="ui header centered"> Search and Play Youtube Videos</h1>
      <div
        className="ui container"
        style={{
          display: "flex",
          padding: "30px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ui steps">
          <div className="step">
            <i className="search icon"></i>
            <div className="content">
              <div className="title">Search</div>
            </div>
          </div>
          <div className="step">
            <i className="hand point down outline icon"></i>
            <div className="content">
              <div className="title">Click</div>
            </div>
          </div>
          <div className="step">
            <i className="play icon"></i>
            <div className="content">
              <div className="title">Play</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={videos}
                onVideoSelect={(video) => setSelectedVideo(video)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
