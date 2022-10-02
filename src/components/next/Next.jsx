import Video from "../video/Video";

import "./next.scss";

export default function Next({ allVideos, changeOnplay, onPlay }) {
  let nextVideos = allVideos.filter((video) => video.id !== onPlay.id);
  return (
    <section className="next">
      <h3 className="next__title">NEXT VIDEOS</h3>
      {nextVideos.map((element) => {
        return (
          <Video
            key={element.id}
            id={element.id}
            image={element.image}
            title={element.title}
            channel={element.channel}
            changeOnPlay={changeOnplay}
          />
        );
      })}
    </section>
  );
}
