import { Router } from 'express';

import api from '../services/api';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const response = await api.get('/me');

  const { id, type, display_name, email, images } = response.data;

  const user = {
    id,
    type,
    display_name,
    email,
    avatar: images.length ? images[0].url : '',
  };

  return res.json(user);
});

interface IImages {
  url: string;
}

interface IArtistFollwers {
  total: number;
}

interface ITopArtists {
  id: string;
  name: string;
  images: IImages[];
  type: string;
  uri: string;
  followers: IArtistFollwers;
  popularity: number;
  topTrackPreview: string;
  topTrackName: string;
}

userRouter.get('/top-artists', async (req, res) => {
  const response = await api.get('/me/top/artists', {
    params: {
      limit: 5,
    },
  });

  const artists: ITopArtists[] = response.data.items;

  await Promise.all(
    artists.map(async artist => {
      const tracksResponse = await api.get(
        `/artists/${artist.id}/top-tracks?country=BR`,
      );

      Object.assign(artist, {
        topTrackPreview: tracksResponse.data.tracks[0].preview_url,
        topTrackName: tracksResponse.data.tracks[0].name,
      });
    }),
  );

  return res.json(artists);
});

interface IPlaylists {
  id: string;
  name: string;
  images: IImages[];
  uri: string;
}

userRouter.get('/playlists', async (req, res) => {
  const response = await api.get('/me/playlists');

  const playlists: IPlaylists[] = response.data.items;

  const formattedPlaylists = playlists.map(playlist => ({
    id: playlist.id,
    name: playlist.name,
    avatar: playlist.images[0].url,
    uri: playlist.uri,
  }));

  return res.json(formattedPlaylists);
});

interface IFavoriteTrackAlbum {
  id: string;
  name: string;
  uri: string;
  images: IImages[];
}

interface IFavoriteTrackArtists {
  id: string;
  name: string;
  uri: string;
  image?: string;
}

interface IFavoriteTrack {
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  uri: string;
  album: IFavoriteTrackAlbum;
  artists: IFavoriteTrackArtists[];
}

userRouter.get('/favorite-tracks', async (req, res) => {
  const response = await api.get('/me/top/tracks', {
    params: {
      limit: 10,
    },
  });

  const favoriteTracks: IFavoriteTrack[] = response.data.items;

  const formattedFavoriteTracks = favoriteTracks.map(track => ({
    id: track.id,
    name: track.name,
    popularity: track.popularity,
    preview_url: track.preview_url,
    uri: track.uri,
    album: {
      id: track.album.id,
      name: track.album.name,
      uri: track.album.uri,
      image: track.album.images[0].url,
    },
    artist: {
      id: track.artists[0].id,
      name: track.artists[0].name,
      uri: track.artists[0].uri,
    },
  }));

  await Promise.all(
    formattedFavoriteTracks.map(async formattedTrack => {
      const artistImageResponse = await api.get(
        `/artists/${formattedTrack.artist.id}`,
      );

      const { images } = artistImageResponse.data;

      if (images.url) {
        Object.assign(formattedTrack.artist, {
          image: images[0].url,
        });
      }
    }),
  );

  return res.json(formattedFavoriteTracks);
});

export default userRouter;
