import { timestampToLocaleDate } from "../../utils/dateFormatters.mjs";

import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

import "./Intro.scss";

export default function Intro({ activeVideo }) {
  return (
    <section className="intro">
      <h1 className="intro__title">{activeVideo.title}</h1>
      <div className="infobar">
        <div className="channel">
          <h3 className="channel__name">By {activeVideo.channel}</h3>
          <p className="channel__date">
            {timestampToLocaleDate(activeVideo.timestamp)}
          </p>
        </div>
        <div className="stats">
          <div className="stats__wrapper">
            <img src={viewsIcon} alt="views" className="stats__views-icon" />
            <p className="stats__views">{activeVideo.views}</p>
          </div>
          <div className="stats__wrapper">
            <img src={likesIcon} alt="likes" className="stats__likes-icon" />
            <p className="stats__likes">{activeVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="intro__description">{activeVideo.description}</p>
    </section>
  );
}
