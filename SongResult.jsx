import { useState } from "react";
import { API_URL } from "./const";
import SongCard from "./SongCard";
import axios from "axios";

const SongResult = ({ songResult }) => {
  console.log(songResult);
  return (
    <div className="result">
      <h1 className="song-title">Songs</h1>
      <ul className="songs-container">
        {songResult.map((song, idx) => (
          <SongCard key={idx} song={song} />
        ))}
      </ul>
    </div>
  );
};

export default SongResult;
