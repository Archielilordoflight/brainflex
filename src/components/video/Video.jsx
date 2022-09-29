import "./video.scss";

export default function Video(props) {
  let { id, image, title, channel, changeOnPlay } = props;

  const clickHandler = (event) => {
    changeOnPlay(event.target.id);
  };

  return (
    <article className="video">
      <img
        id={id}
        src={image}
        alt="video cover photo"
        className="video__img"
        onClick={clickHandler}
      />
      <div>
        <h3>{title}</h3>
        <p>{channel}</p>
      </div>
    </article>
  );
}
