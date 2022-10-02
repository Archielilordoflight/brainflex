import "./commentsForm.scss";

export default function CommentForm(props) {
  let numberOfComments = props.onPlayDetails.comments.length;
  return (
    <section className="comment-form">
      <h3 className="comment-form__title">
        {numberOfComments} {numberOfComments < 2 ? "Comment" : "Comments"}
      </h3>
      <div className="comment-form__icon-box">
        <div className="comment-form__icon"></div>
      </div>
      <form className="form">
        <label className="form__label">JOIN THE CONVERSATION</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          className="form__text-box"
          placeholder="Add a new comment"
        ></textarea>
        <button className="form__button">COMMENT</button>
      </form>
    </section>
  );
}
