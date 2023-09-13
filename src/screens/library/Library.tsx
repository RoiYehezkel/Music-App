import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Library.css";
import { useNavigate } from "react-router-dom";

interface imagesType {
  url: string;
}

interface playlistType {
  id: string;
  name: string;
  images: imagesType[];
  tracks: {
    total: number;
  };
}

const Library: React.FC = () => {
  const [playlists, setPlaylists] = useState<playlistType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    APIKit.get("me/playlists")
      .then((response) => {
        setPlaylists(response.data.items);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        navigate(0);
      });
  }, [navigate]);

  const playPlaylist = (id: string) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist: playlistType) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              className="playlist-image"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
