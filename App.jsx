import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SongResult from "./SongResult";
import SongDetails from "./SongDetails";
import Chart from "./Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songresult" element={<SongResult />} />
        <Route path="/songresult/:key" element={<SongDetails />} />
        <Route path="/topchart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
