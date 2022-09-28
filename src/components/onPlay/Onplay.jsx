import "./onPlay.scss";

export default function OnPlay(props) {
  return (
    <section className="onPlay">
      <img
        src={props.onPlayDetails.image}
        alt="onPlay playing"
        className="onPlay__main"
      />
    </section>
  );
}
