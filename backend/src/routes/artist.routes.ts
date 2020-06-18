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

interface IRelatedArtist {
  id: string;
  name: string;
  images: IImages[];
  uri: string;
  genres: string[];
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
  relatedArtists: IRelatedArtist[];
}

artistRouter.get('/:id', async (req, res) => {
  const [
    artistResponse,
    artistTopTracksResponse,
    relatedArtistsResponse,
  ] = await Promise.all([
    api.get(`artists/${req.params.id}`),
    api.get(`artists/${req.params.id}/top-tracks?market=BR`),
    api.get(`artists/${req.params.id}/related-artists`),
  ]);

  const artist: IArtist = artistResponse.data;
  const artistTopTracks: ITrack[] = artistTopTracksResponse.data.tracks;
  const relatedArtists: IRelatedArtist[] = relatedArtistsResponse.data.artists;

  const formattedArtistTopTracks = artistTopTracks.map(topTrack => ({
    id: topTrack.id,
    image: topTrack.album.images[0].url,
    name: topTrack.name,
    preview_url: topTrack.preview_url,
    uri: topTrack.uri,
  }));

  const formattedRelatedArtists = relatedArtists.map(relatedArtist => ({
    id: relatedArtist.id,
    image: relatedArtist.images[0].url,
    name: relatedArtist.name,
    uri: relatedArtist.uri,
    genres: [relatedArtist.genres[0], relatedArtist?.genres[1]],
  }));

  const formattedArtist = {
    id: artist.id,
    name: artist.name,
    avatar: artist.images[0].url,
    uri: artist.uri,
    followers: artist.followers.total,
    genres: artist.genres,
    popularity: artist.popularity,
    topTracks: formattedArtistTopTracks,
    relatedArtists: formattedRelatedArtists,
  };

  return res.json(formattedArtist);
});

export default artistRouter;
