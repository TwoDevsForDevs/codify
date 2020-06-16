import React, { useState, useEffect, useCallback } from 'react';
import {
  FaHeart,
  FaPauseCircle,
  FaPlayCircle,
  FaSpotify,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useTransition } from 'react-spring';

import { Container, LeftContent, UserFavoriteTracks, Track } from './styles';

import api from '../../services/api';

import getPopularity from '../../utils/getPopularity';
import { playAudioWithFade, pauseAudioWithFade } from '../../utils/audio';

import Spinner from '../../components/Spinner';

interface IAlbum {
  id: string;
  name: string;
  uri: string;
  image: string;
}

interface IArtist {
  id: string;
  name: string;
  uri: string;
}

interface ITrack {
  id: string;
  name: string;
  popularity: number;
  popularityTag: string;
  uri: string;
  preview_url: string;
  audio: HTMLAudioElement;
  album: IAlbum;
  artist: IArtist;
  playing: number;
}

const FavoriteTracks: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [favoriteTracks, setFavoriteTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    async function loadFavoriteTracks(): Promise<void> {
      try {
        setLoading(true);

        const response = await api.get('/me/favorite-tracks');

        const tracksData = response.data.map((track: ITrack) => ({
          ...track,
          audio: new Audio(`${track.preview_url}`),
          playing: 0,
          popularityTag: getPopularity(track.popularity),
        }));

        setFavoriteTracks(tracksData);
      } catch (err) {
        toast.error('Não foi possível carregar suas músicas favoritas.');
      } finally {
        setLoading(false);
      }
    }

    loadFavoriteTracks();
  }, []);

  const handlePlay = useCallback(
    id => {
      setFavoriteTracks(
        favoriteTracks.map(track =>
          track.id === id ? { ...track, playing: 1 } : track,
        ),
      );
    },
    [favoriteTracks],
  );

  const handlePause = useCallback(
    id => {
      setFavoriteTracks(
        favoriteTracks.map(track =>
          track.id === id ? { ...track, playing: 0 } : track,
        ),
      );
    },
    [favoriteTracks],
  );

  const tracksWithTransition = useTransition(
    favoriteTracks,
    track => track.id,
    {
      from: {
        opacity: 0,
        transform: 'scale(0.8)',
      },
      enter: {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  );

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LeftContent>
            <div>
              <FaHeart size={32} color="#fff" />
            </div>
            <h1>
              Visualize Suas
              <span className="green">Músicas Favoritas</span>
            </h1>
            <p>As 10 músicas mais escutadas por você!</p>
          </LeftContent>

          <UserFavoriteTracks>
            {tracksWithTransition.map(({ item, key, props }, index) => (
              <Track
                key={key}
                style={props}
                onMouseLeave={() => {
                  pauseAudioWithFade(item.audio, 100);
                  handlePause(item.id);
                }}
              >
                <div className="track-image">
                  <img src={item.album.image} alt={item.name} />
                </div>

                <div className="track-info">
                  <strong>
                    {index + 1}. {item.name}
                  </strong>
                  <span>{item.artist.name}</span>
                </div>

                <aside>
                  <button
                    type="button"
                    className="pauseButton"
                    onClick={() => {
                      pauseAudioWithFade(item.audio, 100);
                      handlePause(item.id);
                    }}
                  >
                    <FaPauseCircle size={24} color="#33ff7a" />
                  </button>
                  <button
                    type="button"
                    className="playButton"
                    onClick={() => {
                      playAudioWithFade(item.audio, 100);
                      handlePlay(item.id);
                    }}
                  >
                    <FaPlayCircle size={24} color="#33ff7a" />
                  </button>

                  <a href={item.uri}>
                    <FaSpotify size={24} color="#fff" />
                  </a>
                </aside>
              </Track>
            ))}
          </UserFavoriteTracks>
        </>
      )}
    </Container>
  );
};

export default FavoriteTracks;
