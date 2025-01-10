const ImageCard = ({ card, imageClicked }) => {
  const handleClick = (data) => {
    imageClicked(data);
  };
  return (
    <div className="photo-card">
      <img
        className="gallery-image"
        // unsplash
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() => handleClick(card)}

        // pixabay                          // <--- api for testing
        // src={card.webformatURL}
        // alt={card.tags}
      />
    </div>
  );
};

export default ImageCard;
