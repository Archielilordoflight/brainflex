import { useState, useEffect } from "react";
import { getVideos, getVideoDetails } from "./api/apiRequests";

import Header from "./components/header/Header";
import Onplay from "./components/onPlay/Onplay";
import Intro from "./components/intro/Intro";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/commentList/CommentList";
import Next from "./components/next/Next";

import videoDetails from "./assets/data/video-details.json";
// import videos from "./assets/data/videos.json";

function App() {
  const [videos, setRequest] = useState([]);
  const [onPlay, setOnPlay] = useState(videoDetails[0]);

  useEffect(() => {
    getVideos(setRequest);
  }, []);

  const changeOnplay = (id) => {
    videos.forEach((element) => {
      if (element.id === id) {
        getVideoDetails(id, setOnPlay);
        window.scroll(0, 0);
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <Onplay onPlayDetails={onPlay} />
      <div className="page">
        <div className="page__details">
          <Intro onPlayDetails={onPlay} />
          <CommentForm onPlayDetails={onPlay} />
          <CommentList onPlayDetails={onPlay} />
        </div>
        <Next allVideos={videos} changeOnplay={changeOnplay} onPlay={onPlay} />
      </div>
    </div>
  );
}

export default App;
