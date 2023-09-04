import React from "react";
import "./SongCard.css";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import { songCardType } from "../../types/types";

const SongCard: React.FC<songCardType> = (props) => {
  return (
    <div className="songCard-body">
      <AlbumImage url={props.album?.images[0]?.url} />
      <AlbumInfo album={props.album} />
    </div>
  );
};

export default SongCard;
