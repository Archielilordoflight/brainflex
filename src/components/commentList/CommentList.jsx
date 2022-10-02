import EachComment from "../eachComment/EachComment";

import "./commentList.scss";

export default function CommentList({ onPlayDetails }) {
  return (
    <section className="commentList">
      {onPlayDetails.comments.map((element) => {
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
