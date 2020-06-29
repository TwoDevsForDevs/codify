import React, { useEffect, useState, useCallback } from 'react';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaSpotify,
  FaTimes,
  FaRecordVinyl,
  FaUsers,
} from 'react-icons/fa';
import { useTransition } from 'react-spring';
import { toast } from 'react-toastify';

import formatValue from '../../../utils/formatValue';

import Modal from '../../../components/Modal';
import SpotifyButton from '../../../components/SpotifyButton';
import Spinner from '../../../components/Spinner';
import Scroll from '../../../components/Scroll';

import api from '../../../services/api';
import { playAudioWithFade, pauseAudioWithFade } from '../../../utils/audio';

import {
  Container,
  LeftContent,
  Content,
  PlaylistInfo,
  TracksList,
  Track,
  CloseModal,
} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  playlistId: string;
}

interface ITrack {
  id: string;
  name: string;
  preview: string;
  uri: string;
  artistName: string;
  albumImage: string;
  audio: HTMLAudioElement;
  playing: number;
}

interface IPlaylist {
  id: string;
  name: string;
  avatar: string;
  uri: string;
  followers: number;
  formattedFollowers: number;
  totalTracks: number;
}

const ModalPlaylistTracks: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  playlistId,
}) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [playlist, setPlaylist] = useState<IPlaylist>({} as IPlaylist);

  useEffect(() => {
    async function loadPlaylist(): Promise<void> {
      try {
        const [playlistResponse, tracksResponse] = await Promise.all([
          api.get(`/playlist/${playlistId}`),
          api.get(`/playlist/tracks/${playlistId}`),
        ]);

        const playlistData = {
          ...playlistResponse.data,
          formattedFollowers: formatValue(playlistResponse.data.followers),
        };

        const tracksData = tracksResponse.data.map((track: ITrack) => ({
          ...track,
          audio: new Audio(`${track.preview}`),
          playing: 0,
        }));

        setPlaylist(playlistData);
        setTracks(tracksData);
      } catch (err) {
        toast.error('Não foi possível carregar as músicas da playlist.');
      } finally {
        setLoading(false);
      }
    }

    loadPlaylist();
  }, [playlistId]);

  const tracksWithTransition = useTransition(tracks, track => track.id, {
    from: {
      opacity: 0,
      transform: 'translateY(40px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
    },
    trail: 100,
  });

  const handlePlay = useCallback(
    id => {
      setTracks(
        tracks.map(track =>
          track.id === id ? { ...track, playing: 1 } : track,
        ),
      );
    },
    [tracks],
  );

  const handlePause = useCallback(
    id => {
      setTracks(
        tracks.map(track =>
          track.id === id ? { ...track, playing: 0 } : track,
        ),
      );
    },
    [tracks],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {loading ? (
          <Spinner width={48} height={48} />
        ) : (
          <>
            <Scroll>
              <LeftContent>
                <div>
                  <img src={playlist.avatar} alt={playlist.name} />
                </div>

                <SpotifyButton href={playlist.uri}>
                  Abrir no Spotify
                </SpotifyButton>
              </LeftContent>

              <Content>
                <h1>{playlist.name}</h1>

                <PlaylistInfo>
                  <aside>
                    <div>
                      <FaUsers color="#33ff7a" />
                      <strong>{playlist.formattedFollowers} </strong>Seguidores
                    </div>
                    <div>
                      <FaRecordVinyl color="#33ff7a" />
                      <strong>{playlist.totalTracks} </strong>Músicas
                    </div>
                  </aside>
                </PlaylistInfo>

                <TracksList>
                  {tracksWithTransition.map(({ item, key, props }, index) => (
                    <Track
                      key={key}
                      style={props}
                      playing={item.playing ? 1 : 0}
                      onMouseLeave={() => {
                        pauseAudioWithFade(item.audio, 100);
                        handlePause(item.id);
                      }}
                    >
                      <div className="track-image">
                        <img src={item.albumImage} alt={item.name} />
                      </div>

                      <div className="track-info">
                        <strong>
                          {index + 1}. {item.name}
                        </strong>
                        <span>{item.artistName}</span>
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
                          <FaPauseCircle color="#33ff7a" />
                        </button>
                        <button
                          type="button"
                          className="playButton"
                          onClick={() => {
                            playAudioWithFade(item.audio, 100);
                            handlePlay(item.id);
                          }}
                        >
                          <FaPlayCircle color="#33ff7a" />
                        </button>

                        <a href={item.uri}>
                          <FaSpotify color="#fff" />
                        </a>
                      </aside>
                    </Track>
                  ))}
                </TracksList>
              </Content>
            </Scroll>

            <CloseModal type="button" onClick={setIsOpen}>
              <FaTimes color="#f7415f" />
            </CloseModal>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalPlaylistTracks;
