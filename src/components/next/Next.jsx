import Video from "../video/Video";

export default function Next(props) {
  return (
    <section>
      <h3>NEXT VIDEOS</h3>
      {props.videoDetails.map((element) => {
        return (
          <Video
            key={element.id}
            image={element.image}
            title={element.title}
            channel={element.channel}
            changeOnPlay={props.changeOnplay}
          />
        );
      })}
    </section>
  );
}
