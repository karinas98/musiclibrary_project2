import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  return (
    <li>
      <div className="card-container">
        <Link to={`/songresult/${song.track.key}`}>
          <img className="card-img" src={song.track.share.image} />
          <h3 className="card-title">{song.track.title}</h3>
          <button className="btn card-btn">{song.track.subtitle}</button>
        </Link>
      </div>
    </li>
  );
};
export default SongCard;
