import { timestampToLocaleDate } from "../../utils/dateFormatters.mjs";

import "./EachComments.scss";

export default function EachComment({ name, timestamp, content }) {
  return (
    <article className="comments">
      <div className="comments__icon-box">
        <div className="comments__icon"></div>
      </div>
      <div className="comments__wrapper">
        <h3 className="comments__name">{name}</h3>
        <p className="comments__date">{timestampToLocaleDate(timestamp)}</p>
        <p className="comments__content">{content}</p>
      </div>
    </article>
  );
}
