import { timestampToLocaleDate } from "../../utils/dateFormatters.mjs";

import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

import "./Intro.scss";

export default function Intro({ onPlayDetails }) {
  return (
    <section className="intro">
      <h1 className="intro__title">{onPlayDetails.title}</h1>
      <div className="infobar">
        <div className="channel">
          <h3 className="channel__name">By {onPlayDetails.channel}</h3>
          <p className="channel__date">
            {timestampToLocaleDate(onPlayDetails.timestamp)}
          </p>
        </div>
        <div className="stats">
          <div className="stats__wrapper">
            <img src={viewsIcon} alt="views" className="stats__views-icon" />
            <p className="stats__views">{onPlayDetails.views}</p>
          </div>
          <div className="stats__wrapper">
            <img src={likesIcon} alt="likes" className="stats__likes-icon" />
            <p className="stats__likes">{onPlayDetails.likes}</p>
          </div>
        </div>
      </div>
      <p className="intro__description">{onPlayDetails.description}</p>
    </section>
  );
}
