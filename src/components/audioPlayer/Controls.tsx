import React from "react";
import { trackType } from "../../types/types";
import "./Controls.css";

interface controlsType {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  handleNext: () => void;
  handlePrev: () => void;
  total: trackType[];
}

const Controls: React.FC<controlsType> = (props) => {
  return <div>Controls</div>;
};

export default Controls;
