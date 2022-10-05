import EachComment from "../eachComment/EachComment";

import "./commentList.scss";

export default function CommentList({ activeVideo }) {
  return (
    <section className="commentList">
      {activeVideo.comments.map((element) => {
        return (
          <EachComment
            key={element.id}
            name={element.name}
            timestamp={element.timestamp}
            content={element.comment}
          />
        );
      })}
    </section>
  );
}
