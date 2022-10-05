import "./video.scss";
import { NavLink } from "react-router-dom";

export default function Video(props) {
  let { id, image, title, channel } = props;

  return (
    <article className="video">
      <div className="image__wrapper">
        <NavLink to={`/videos/${id}`}>
          <img
            id={id}
            src={image}
            alt="video cover photo"
            className="video__img"
          />
        </NavLink>
      </div>
      <div className="video__descriptions">
        <h3 className="video__titles">{title}</h3>
        <p className="video__channel">{channel}</p>
      </div>
    </article>
  );
}
