import { Router } from 'express';

import api from '../services/api';

const artistRouter = Router();

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
  popularity: string;
  uri: string;
}

artistRouter.get('/:id', async (req, res) => {
  const response = await api.get(`artists/${req.params.id}`);

  const artist: IArtist = response.data;

  const formattedArtist = {
    id: artist.id,
    name: artist.name,
    avatar: artist.images[0].url,
    uri: artist.uri,
    followers: artist.followers.total,
    genres: artist.genres,
    popularity: artist.popularity,
  };

  return res.json(formattedArtist);
});

export default artistRouter;
