import "./VideoPlayer.scss";
import { apiKey } from "../../utils/apiRequests";

export default function VideoPlayer({ activeVideo }) {
  return (
    <section className="onPlay">
      <div className="onPlay__box">
        <video
          src={`${activeVideo.video}${apiKey}`}
          poster={activeVideo.image}
          controls
          alt="onPlay playing"
          className="onPlay__main"
        />
      </div>
    </section>
  );
}
