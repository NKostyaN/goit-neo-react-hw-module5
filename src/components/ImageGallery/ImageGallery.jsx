import ImageCard from "../ImageCard/ImageCard";
import { nanoid } from "nanoid";

const ImageGallery = ({ hits, showModal }) => {
  const onImageClick = (data) => {
    showModal(data, true);
  };

  return (
    <ul className="gallery">
      {hits.map((el) => (
        <li key={nanoid()}>
          <ImageCard card={el} imageClicked={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
