import React, { useEffect, useState, useCallback } from 'react';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaSpotify,
  FaTimes,
  FaCompactDisc,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useTransition } from 'react-spring';
import { toast } from 'react-toastify';

import Modal from '../../../components/Modal';
import SpotifyButton from '../../../components/SpotifyButton';
import Spinner from '../../../components/Spinner';

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
  const [mount, setMount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function loadPlaylist(): Promise<void> {
      try {
        const [playlistResponse, tracksResponse] = await Promise.all([
          api.get(`/playlist/${playlistId}`),
          api.get(`/playlist/tracks/${playlistId}`, {
            params: {
              page: currentPage,
            },
          }),
        ]);

        const tracksData = tracksResponse.data.map((track: ITrack) => ({
          ...track,
          audio: new Audio(`${track.preview}`),
          playing: 0,
        }));

        setPlaylist(playlistResponse.data);
        setTracks(tracksData);

        setTimeout(() => {
          setMount(1);
        }, 10);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    loadPlaylist();
  }, [playlistId, currentPage]);

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

  const handlePage = useCallback(page => {
    if (page === 0) {
      setCurrentPage(0);
    } else {
      setCurrentPage(page + 50);
    }
  }, []);

  console.log(!!setTracks);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {loading ? (
          <Spinner width={48} height={48} />
        ) : (
          <>
            <LeftContent mount={mount}>
              <img src={playlist.avatar} alt={playlist.name} />
              <SpotifyButton href={playlist.uri}>
                Abrir no Spotify
              </SpotifyButton>
            </LeftContent>

            <Content mount={mount}>
              <h1>{playlist.name}</h1>

              <PlaylistInfo>
                <aside>
                  <div>
                    <FaUsers size={18} color="#33ff7a" />
                    Seguidores: <strong>{playlist.followers}</strong>
                  </div>
                  <div>
                    <FaCompactDisc size={18} color="#33ff7a" />
                    Músicas: <strong>{playlist.totalTracks}</strong>
                  </div>
                </aside>

                <nav>
                  <button
                    type="button"
                    onClick={() => handlePage(currentPage - 1)}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePage(currentPage + 1)}
                  >
                    <FaChevronRight />
                  </button>
                </nav>
              </PlaylistInfo>

              <TracksList>
                {tracksWithTransition.map(({ item, key, props }, index) => (
                  <Track
                    key={key}
                    style={props}
                    playing={item.playing ? 1 : 0}
                    mount={mount ? 1 : 0}
                  >
                    <img src={item.albumImage} alt={item.name} />
                    <div>
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
              </TracksList>

              <CloseModal type="button" onClick={setIsOpen}>
                <FaTimes size={24} color="#f7415f" />
              </CloseModal>
            </Content>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalPlaylistTracks;