import "./commentsForm.scss";

export default function CommentForm(props) {
  let numberOfComments = props.activeVideo.comments.length;
  return (
    <section className="comment-form">
      <h3 className="comment-form__title">
        {numberOfComments} {numberOfComments < 2 ? "Comment" : "Comments"}
      </h3>
      <div className="comment-form__wrapper">
        <div className="comment-form__icon-box">
          <div className="comment-form__icon"></div>
        </div>
        <form className="form">
          <div className="form__text-box">
            <label className="form__label">JOIN THE CONVERSATION</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="form__text"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="form__button">COMMENT</button>
        </form>
      </div>
    </section>
  );
}
