import React, { useState, useEffect } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";
import { songCardType } from "../../types/types";

const Player: React.FC = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState<songCardType>({
    album: {
      images: [],
      name: "",
      artists: [],
      album_type: "",
      total_tracks: 0,
      release_date: "",
    },
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="rigth-player-body">
        <SongCard album={currentTrack.album} />
        <Queue />
      </div>
    </div>
  );
};

export default Player;
