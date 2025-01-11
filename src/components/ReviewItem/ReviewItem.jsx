const ReviewItem = ({ item }) => {
  return (
    <div className="review-item">
      <p>
        <b>Author:</b> {item.author}
      </p>
      <p>
        <b>Review:</b> {item.content}
      </p>
      <hr />
    </div>
  );
};

export default ReviewItem;
