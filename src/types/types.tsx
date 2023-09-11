export interface albumImageType {
  url: string;
}

interface artistType {
  name: string;
}

export interface albumType {
  album: {
    images: albumImageType[];
    name: string;
    artists: artistType[];
    album_type: string;
    total_tracks: number;
    release_date: string;
  };
  track?: {
    name: string;
    preview_url: string;
  };
}

export interface trackType {
  track: albumType;
}
