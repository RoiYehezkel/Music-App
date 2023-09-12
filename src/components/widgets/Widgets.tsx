import React, { useState, useEffect } from "react";
import {
  albumType,
  artistType,
  featuredType,
  newReleaseType,
} from "../../types/types";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";
import "./Widgets.css";

interface widgetsProps {
  album: albumType;
}

const Widgets: React.FC<widgetsProps> = ({ album }) => {
  const artistID = album?.album;
  const id = artistID?.artists[0]?.id;

  const [similar, setSimilar] = useState<artistType[]>([]);
  const [featured, setFeatured] = useState<featuredType[]>([]);
  const [newRelease, setNewRelease] = useState<newReleaseType[]>([]);

  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${id}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((error) => console.log(error));

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((error) => console.log(error));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
    }
  }, [artistID, id]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
