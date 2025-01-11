import ReviewItem from "../ReviewItem/ReviewItem";
import { nanoid } from "nanoid";

const ReviewList = ({ hits }) => {
  return (
    <ul className="review-list">
      {hits.map((el) => (
        <li key={nanoid()}>
          <ReviewItem item={el} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
