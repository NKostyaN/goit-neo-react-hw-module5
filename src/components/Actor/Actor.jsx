import "./Actor.css";
const Actor = ({ item }) => {
  const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

  return (
    <div className="cast-card">
      {item.profile_path ? (
        <img
          className="actor-photo"
          src={`${POSTER_PATH + item.profile_path}`}
          alt="Actor photo"
        />
      ) : (
        <div className="actor-placeholder"></div>
      )}
      <div className="actor-info">
        <p>
          <b>{item.name}</b>
        </p>
        <p className="character-p" >Charater: {item.character}</p>
      </div>
    </div>
  );
};

export default Actor;
