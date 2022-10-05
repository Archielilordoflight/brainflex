import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoDetails } from "../utils/apiRequests";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Intro from "../components/intro/Intro";
import CommentForm from "../components/comment-form/CommentForm";
import CommentList from "../components/commentList/CommentList";
import Next from "../components/next/Next";

export default function Home({ allVideos }) {
  const [activeVideo, setActiveVideo] = useState(null);
  let { videoId } = useParams();

  useEffect(() => {
    if (!videoId) {
      getVideoDetails(allVideos[0].id, setActiveVideo);
    } else {
      changeOnplay(videoId);
    }
  }, [videoId]);

  const changeOnplay = (id) => {
    getVideoDetails(id, setActiveVideo);
    window.scroll(0, 0);
  };

  if (!activeVideo) {
    return <>Loading</>;
  }

  return (
    <>
      <VideoPlayer activeVideo={activeVideo} />
      <div className="page">
        <div className="page__details">
          <Intro activeVideo={activeVideo} />
          <CommentForm activeVideo={activeVideo} />
          <CommentList activeVideo={activeVideo} />
        </div>
        <Next allVideos={allVideos} onPlay={activeVideo} />
      </div>
    </>
  );
}
