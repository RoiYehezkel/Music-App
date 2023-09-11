import React from "react";
import "./WaveAnimation.css";

interface waveAnimationProps {
  isPlaying: boolean;
}

const WaveAnimation: React.FC<waveAnimationProps> = ({ isPlaying }) => {
  const waveClass = isPlaying ? "box active" : "box";

  return (
    <div className="box-container flex">
      <div className={`${waveClass} box1`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
    </div>
  );
};

export default WaveAnimation;
