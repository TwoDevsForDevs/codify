import { Router } from 'express';

import api from '../services/api';

const artistRouter = Router();

interface IAlbum {
  images: IImages[];
}

interface ITrack {
  id: string;
  album: IAlbum;
  name: string;
  preview_url: string;
  uri: string;
}

interface IImages {
  url: string;
}

interface IArtistFollwers {
  total: number;
}

interface IArtist {
  id: string;
  followers: IArtistFollwers;
  genres: string[];
  images: IImages[];
  name: string;
  popularity: number;
  uri: string;
  topTracks: ITrack[];
}

artistRouter.get('/:id', async (req, res) => {
  const [artistResponse, artistTopTracksResponse] = await Promise.all([
    api.get(`artists/${req.params.id}`),
    api.get(`artists/${req.params.id}/top-tracks?market=BR`),
  ]);

  const artist: IArtist = artistResponse.data;
  const artistTopTracks: ITrack = artistTopTracksResponse.data;

  const formattedArtist = {
    id: artist.id,
    name: artist.name,
    avatar: artist.images[0].url,
    uri: artist.uri,
    followers: artist.followers.total,
    genres: artist.genres,
    popularity: artist.popularity,
    topTracks: artistTopTracks,
  };

  return res.json(formattedArtist);
});

export default artistRouter;
