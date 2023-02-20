import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL, API_KEY } from "./const";
import axios from "axios";
import SongResult from "./SongResult";

const Home = () => {
  const [searchData, setSearchData] = useState({
    title: "",
  });
  const [foundSongs, setFoundSongs] = useState([]);
  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
    const { data } = await axios.get(
      `${API_URL}/search?term=${searchData.title}`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
        },
      }
    );
    setFoundSongs(data.tracks.hits);
  };
  console.log(foundSongs);
  return (
    <div className="home">
      <h1 className="home-title">Music Discovery</h1>
      <form onSubmit={onSubmit} className="form-home">
        <input
          className="input"
          type="text"
          value={searchData.title}
          name="title"
          onChange={onChange}
          placeholder="What song are you looking for?"
        />
        <button className="home-btn btn" type="submit">
          Search
        </button>
      </form>
      {foundSongs.length && <SongResult songResult={foundSongs} />}
    </div>
  );
};

export default Home;
