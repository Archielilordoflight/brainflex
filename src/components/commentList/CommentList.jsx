import EachComment from "../eachComment/EachComment";

export default function CommentList(props) {
  return (
    <section className="commentList">
      {props.onPlayDetails.comments.map((element) => {
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
