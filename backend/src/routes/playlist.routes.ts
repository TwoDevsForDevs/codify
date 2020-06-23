import { Router } from 'express';

import api from '../services/api';

const playlistRouter = Router();

interface IImages {
  url: string;
}

interface IPlaylistFollwers {
  total: number;
}

interface ITrack {
  total: number;
}

interface IPlaylist {
  id: string;
  name: string;
  images: IImages[];
  uri: string;
  followers: IPlaylistFollwers;
  tracks: ITrack;
}

playlistRouter.get('/:id', async (req, res) => {
  const response = await api.get(`playlists/${req.params.id}`);

  const playlist: IPlaylist = response.data;

  const formattedPlaylist = {
    id: playlist.id,
    name: playlist.name,
    avatar: playlist.images[0].url,
    uri: playlist.uri,
    followers: playlist.followers.total,
    totalTracks: playlist.tracks.total,
  };

  return res.json(formattedPlaylist);
});

interface IArtist {
  name: string;
}

interface IAlbum {
  images: IImages[];
}

interface ITrack {
  id: string;
  artists: IArtist[];
  album: IAlbum;
  name: string;
  preview_url: string;
  uri: string;
}

interface ITracks {
  track: ITrack;
}

playlistRouter.get('/tracks/:id', async (req, res) => {
  const response = await api.get(`playlists/${req.params.id}/tracks?limit=100`);

  const tracks: ITracks[] = response.data.items;

  const formattedTracks = tracks.map(item => ({
    id: item?.track.id,
    name: item?.track.name,
    preview: item?.track.preview_url,
    uri: item?.track.uri,
    artistName: item?.track.artists[0].name,
    albumImage: item?.track.album.images[0].url,
  }));

  return res.json(formattedTracks);
});

export default playlistRouter;
