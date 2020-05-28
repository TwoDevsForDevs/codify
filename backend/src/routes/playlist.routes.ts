import { Router } from 'express';

import api from '../services/api';

const playlistRouter = Router();

interface IArtist {
  name: string;
}

interface IImages {
  url: string;
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
  const response = await api.get(`playlists/${req.params.id}/tracks`);

  const tracks: ITracks[] = response.data.items;

  const formattedTracks = tracks.map(item => ({
    id: item.track.id,
    name: item.track.name,
    preview: item.track.preview_url,
    uri: item.track.uri,
    artistName: item.track.artists[0].name,
    albumImage: item.track.album.images[0].url,
  }));

  return res.json(formattedTracks);
});

export default playlistRouter;
