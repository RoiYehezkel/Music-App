import React from "react";
import "./SongCard.css";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import { albumType } from "../../types/types";

const SongCard: React.FC<albumType> = (props) => {
  return (
    <div className="songCard-body">
      <AlbumImage url={props.album?.images[0]?.url} />
      <AlbumInfo album={props.album} />
    </div>
  );
};

export default SongCard;
