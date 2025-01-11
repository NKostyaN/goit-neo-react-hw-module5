import Actor from "../Actor/Actor";
import { nanoid } from "nanoid";
import "./CastList.css";

const CastList = ({ hits }) => {
  return (
    <ul className="cast-list">
      {hits.map((el) => (
        <li key={nanoid()}>
          <Actor item={el} />
        </li>
      ))}
    </ul>
  );
};

export default CastList;
