import "./onPlay.scss";
import { apiKey } from "../../api/apiRequests";

export default function OnPlay({ onPlayDetails }) {
  return (
    <section className="onPlay">
      <div className="onPlay__box">
        <video
          src={`${onPlayDetails.video}${apiKey}`}
          poster={onPlayDetails.image}
          controls
          alt="onPlay playing"
          className="onPlay__main"
        />
      </div>
    </section>
  );
}
