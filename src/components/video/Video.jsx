import "./video.scss";

export default function Video(props) {
  let { id, image, title, channel, changeOnPlay } = props;

  const clickHandler = (event) => {
    changeOnPlay(event.target.id);
  };

  return (
    <article className="video">
      <div className="image__wrapper">
        <img
          id={id}
          src={image}
          alt="video cover photo"
          className="video__img"
          onClick={clickHandler}
        />
      </div>
      <div className="video__descriptions">
        <h3 className="video__titles">{title}</h3>
        <p className="video__channel">{channel}</p>
      </div>
    </article>
  );
}
