import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
import Feed from "../feed/Feed";
import Trending from "../trending/Trending";
import Player from "../player/Player";
import Favorites from "../favorites/Favorites";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Home: React.FC = () => {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
