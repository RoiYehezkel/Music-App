import React from "react";
import "./SongCard.css";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import { albumType } from "../../types/types";

const SongCard: React.FC<albumType> = ({ album }) => {
  return (
    <div className="songCard-body">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
