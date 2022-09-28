import { useState } from "react";

import Header from "./components/header/Header";
import Onplay from "./components/onPlay/Onplay";
import Intro from "./components/intro/Intro";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/commentList/CommentList";
import Next from "./components/next/Next";

import videoDetails from "./assets/data/video-details.json";

function App() {
  const [onPlay, setOnPlay] = useState(videoDetails[0]);

  const changeOnplay = (src) => {
    videoDetails.forEach((element) => {
      if (element.image === src) {
        setOnPlay(element);
      }
    });
  };
  return (
    <div className="App">
      <Header />
      <Onplay onPlayDetails={onPlay} />
      <Intro onPlayDetails={onPlay} />
      <CommentForm onPlayDetails={onPlay} />
      <CommentList onPlayDetails={onPlay} />
      <Next videoDetails={videoDetails} changeOnplay={changeOnplay} />
    </div>
  );
}

export default App;
