const SliderComment = ({ commentatorName, commentText, commentDate }) => {
  return (
    <div className="slider-item">
      <div className="comment-box">
        <div className="comment-header">
          <img
            src="./images/pexels-italo-melo-881954-2379004.jpg"
            alt=""
            loading="lazy"
            className="commentator-image"
          />
          <h4 className="commentator-name">{commentatorName}</h4>
        </div>
        <hr className="comments-line" />
        <p className="comment-text">{commentText}</p>
        <p className="comment-date">{commentDate}</p>
      </div>
    </div>
  );
};
export default SliderComment;
