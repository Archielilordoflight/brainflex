export default function EachComment(props) {
  let date = new Date(props.timestamp).toLocaleDateString();
  return (
    <article className="comments">
      <div className="comments__icon-box">
        <div className="comments__icon"></div>
      </div>
      <div className="comments__wrapper">
        <h3 className="comments__name">{props.name}</h3>
        <p className="comments__date">{date}</p>
        <p className="comments__content">{props.content}</p>
      </div>
    </article>
  );
}
