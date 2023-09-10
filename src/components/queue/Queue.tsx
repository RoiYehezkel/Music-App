import React from "react";
import "./Queue.css";
import { trackType } from "../../types/types";

interface queueType {
  tracks: trackType[];
  setCurrentIndex: (value: number) => void;
}

const Queue: React.FC<queueType> = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track.album.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
