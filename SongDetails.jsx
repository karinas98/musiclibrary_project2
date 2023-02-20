import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "./const";
import axios from "axios";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const { key } = useParams();

  const [songDetails, setSongDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${API_URL}/songs/get-details?key=${key}`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
          },
        }
      );
      console.log(songDetails);
      setSongDetails(data);
    };
    fetchData();
  }, []);

  return songDetails ? (
    <div className="details-page">
      <section className="song-left-container">
        <div className="details-header">
          <h1 className="songdetails-title">{songDetails.title}</h1>
          <p className="genre">{songDetails.genres.primary}</p>
        </div>
        <img className="img-details" src={songDetails.share.image} />
        <div className="line-break"></div>
        <div className="artist">
          <h3 className="songdetails">{songDetails.subtitle}</h3>
          <img className="img-details" src={songDetails.share.avatar} />
        </div>
      </section>
      <section className="song-right-container">
        {songDetails.sections[1].text.map((line, idx) => {
          return (
            <p className="lyrics" key={idx}>
              {line}
            </p>
          );
        })}
      </section>
    </div>
  ) : null;
};

export default SongDetails;
