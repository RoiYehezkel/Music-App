export interface albumImageType {
  url: string;
}

export interface artistType {
  id: string;
  name: string;
  followers: {
    total: number;
  };
  images: albumImageType[];
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
  };
  preview_url?: string;
}

export interface trackType {
  track: albumType;
}

export interface featuredType {
  name: string;
  tracks: {
    total: number;
  };
  images: albumImageType[];
}

export interface newReleaseType {
  name: string;
  artists: artistType[];
  images: albumImageType[];
}
