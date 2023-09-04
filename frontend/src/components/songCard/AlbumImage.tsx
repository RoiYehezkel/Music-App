import React from "react";
import "./AlbumImage.css";
import { albumImageType } from "../../types/types";

const AlbumImage: React.FC<albumImageType> = ({ url }) => {
  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
