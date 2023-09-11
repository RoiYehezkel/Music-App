import React, { useState, useEffect } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";
import { albumType, trackType } from "../../types/types";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

const Player: React.FC = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState<trackType[]>([]);
  const [currentTrack, setCurrentTrack] = useState<albumType>({
    album: {
      images: [],
      name: "",
      artists: [],
      album_type: "",
      total_tracks: 0,
      release_date: "",
    },
    track: {
      name: "",
      preview_url: "",
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

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
        />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
