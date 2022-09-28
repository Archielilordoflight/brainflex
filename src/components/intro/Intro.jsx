import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

import "./Intro.scss";

export default function (props) {
  return (
    <section className="intro">
      <h1 className="intro__title">{props.onPlayDetails.title}</h1>
      <div className="infobar">
        <div className="channel">
          <h3 className="channel__name">By {props.onPlayDetails.channel}</h3>
          <p className="channel__date">
            {new Date(props.onPlayDetails.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="stats">
          <div className="stats__wrapper">
            <img src={viewsIcon} alt="views" className="stats__views-icon" />
            <p className="stats__views">{props.onPlayDetails.views}</p>
          </div>
          <div className="stats__wrapper">
            <img src={likesIcon} alt="likes" className="stats__likes-icon" />
            <p className="stats__likes">{props.onPlayDetails.likes}</p>
          </div>
        </div>
      </div>
      <p className="intro__description">{props.onPlayDetails.description}</p>
    </section>
  );
}
