import "./video.scss";

export default function Video(props) {
  const clickHandler = (event) => {
    props.changeOnPlay(event.target.src);
  };
  return (
    <article className="video">
      <img
        src={props.image}
        alt="video cover photo"
        className="video__img"
        onClick={clickHandler}
      />
      <div>
        <h3>{props.title}</h3>
        <p>{props.channel}</p>
      </div>
    </article>
  );
}
