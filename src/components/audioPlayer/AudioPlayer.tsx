import React from "react";
import { albumType } from "../../types/types";
import ProgressCircle from "./ProgressCircle";
import "./AudioPlayer.css";

interface audioPlayerType {
  currentTrack: albumType;
}

const AudioPlayer: React.FC<audioPlayerType> = ({ currentTrack }) => {
  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body"></div>
    </div>
  );
};

export default AudioPlayer;
