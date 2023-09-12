import React, { useState, useRef, useEffect } from "react";
import { albumType, trackType } from "../../types/types";
import ProgressCircle from "./ProgressCircle";
import "./AudioPlayer.css";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";

interface audioPlayerType {
  currentTrack: albumType;
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  total: trackType[];
}

const AudioPlayer: React.FC<audioPlayerType> = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  let audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track?.preview_url));

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current?.currentTime || 0);
      }
    }, 1000);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            startTimer();
          })
          .catch((error) => {});
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      }
    } else {
      if (isPlaying && audioRef.current) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current
          .play()
          .then(() => {
            startTimer();
          })
          .catch((error) => {});
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      }
    }
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          startTimer();
        })
        .catch((error) => {});
    } else {
      isReady.current = true;
    }
  }, [currentIndex, audioSrc]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addZero = (n: number) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists: string[] = [];
  currentTrack?.album.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.album.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
