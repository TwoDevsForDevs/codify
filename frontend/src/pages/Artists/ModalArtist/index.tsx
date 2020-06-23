import React, { useEffect, useState, useCallback } from 'react';
import { useTransition } from 'react-spring';
import {
  FaSpotify,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaPauseCircle,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import formatValue from '../../../utils/formatValue';

import Modal from '../../../components/Modal';
import SpotifyButton from '../../../components/SpotifyButton';
import Spinner from '../../../components/Spinner';
import Scroll from '../../../components/Scroll';
import Seguidores from '../../../components/AnimatedVectors/Seguidores';
import PoucoEscutado from '../../../components/AnimatedVectors/PoucoEscutado';
import ChamandoAtencao from '../../../components/AnimatedVectors/ChamandoAtencao';
import BemConhecido from '../../../components/AnimatedVectors/BemConhecido';
import Popular from '../../../components/AnimatedVectors/Popular';
import Estourando from '../../../components/AnimatedVectors/Estourando';

import getPopularity from '../../../utils/getPopularity';
import { playAudioWithFade, pauseAudioWithFade } from '../../../utils/audio';

import {
  Container,
  LeftContent,
  Content,
  Genres,
  ArtistInfo,
  ArtistTopTracks,
  TopTracksList,
  TopTrack,
  CloseModal,
  RelatedArtists,
  RelatedArtistsList,
  RelatedArtist,
} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  artistId: string;
}

interface ITopTrack {
  id: string;
  image: string;
  name: string;
  preview_url: string;
  audio: HTMLAudioElement;
  uri: string;
  playing: number;
}

interface IRelatedArtist {
  id: string;
  name: string;
  image: string;
  uri: string;
  genres: string[];
}

interface IArtist {
  id: string;
  name: string;
  followers: number;
  formattedFollowers: number;
  genres: string[];
  avatar: string;
  popularity: number;
  popularityTag: string;
  uri: string;
  topTracks: ITopTrack[];
}

const ModalArtist: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  artistId,
}) => {
  const [artist, setArtist] = useState<IArtist>({} as IArtist);
  const [topTracks, setTopTracks] = useState<ITopTrack[]>([]);
  const [relatedArtists, setRelatedArtists] = useState<IRelatedArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [slideTracks, setSlideTracks] = useState(false);
  const [slideRelatedArtists, setSlideRelatedArtists] = useState(false);

  useEffect(() => {
    async function loadArtist(): Promise<void> {
      try {
        const { data } = await api.get(`artist/${artistId}`);

        const popularity = getPopularity(data.popularity);

        const artistData = {
          ...data,
          popularityTag: popularity,
          formattedFollowers: formatValue(data.followers),
        };

        const topTracksFormatted = data.topTracks
          .slice(0, 6)
          .map((track: ITopTrack) => ({
            ...track,
            audio: new Audio(`${track.preview_url}`),
            playing: 0,
          }));

        setArtist(artistData);
        setTopTracks(topTracksFormatted);
        setRelatedArtists(data.relatedArtists.slice(0, 6));
      } catch (err) {
        toast.error('Não foi possível carregar as informações do artista.');
      } finally {
        setLoading(false);
      }
    }

    loadArtist();
  }, [artistId]);

  const handleSlideTracks = useCallback(() => {
    setSlideTracks(!slideTracks);
  }, [slideTracks]);

  const handleSlideRelatedArtists = useCallback(() => {
    setSlideRelatedArtists(!slideRelatedArtists);
  }, [slideRelatedArtists]);

  const handlePlay = useCallback(
    id => {
      setTopTracks(
        topTracks.map(track =>
          track.id === id ? { ...track, playing: 1 } : track,
        ),
      );
    },
    [topTracks],
  );

  const handlePause = useCallback(
    id => {
      setTopTracks(
        topTracks.map(track =>
          track.id === id ? { ...track, playing: 0 } : track,
        ),
      );
    },
    [topTracks],
  );

  const topTracksWithTransition = useTransition(topTracks, track => track.id, {
    from: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    trail: 150,
  });

  const relatedArtistsWithTransition = useTransition(
    relatedArtists,
    related => related.id,
    {
      from: {
        opacity: 0,
        transform: 'scale(0.8)',
      },
      enter: {
        opacity: 1,
        transform: 'scale(1)',
      },
      trail: 150,
    },
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
                  <img src={artist.avatar} alt={artist.name} />
                </div>

                <SpotifyButton href={artist.uri}>
                  Abrir no Spotify
                </SpotifyButton>
              </LeftContent>

              <Content>
                <h1>{artist.name}</h1>
                <Genres>
                  {artist.genres.map(genre => (
                    <span key={genre}>{genre}</span>
                  ))}
                </Genres>

                <ArtistInfo>
                  <div className="popularity">
                    {artist.popularityTag === 'Pouco escutado' && (
                      <PoucoEscutado />
                    )}
                    {artist.popularityTag === 'Chamando Atenção' && (
                      <ChamandoAtencao />
                    )}
                    {artist.popularityTag === 'Bem conhecido' && (
                      <BemConhecido />
                    )}
                    {artist.popularityTag === 'Popular' && <Popular />}
                    {artist.popularityTag === 'Estourando' && <Estourando />}

                    <div className="info">
                      <span>Popularidade</span>
                      <strong>{artist.popularityTag}</strong>
                    </div>
                  </div>

                  <div className="followers">
                    <Seguidores />

                    <div className="info">
                      <span>Seguidores</span>
                      <strong>{artist.formattedFollowers}</strong>
                    </div>
                  </div>
                </ArtistInfo>

                <ArtistTopTracks>
                  <div>
                    <h3>Músicas mais tocadas</h3>

                    <nav>
                      <button
                        type="button"
                        disabled={!slideTracks}
                        onClick={handleSlideTracks}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        type="button"
                        disabled={slideTracks}
                        onClick={handleSlideTracks}
                      >
                        <FaChevronRight />
                      </button>
                    </nav>
                  </div>

                  <TopTracksList slideTracks={slideTracks}>
                    {topTracksWithTransition.map(
                      ({ item, key, props }, index) => (
                        <TopTrack
                          key={key}
                          style={props}
                          playing={item.playing ? 1 : 0}
                          onMouseLeave={() => {
                            pauseAudioWithFade(item.audio, 250);
                            handlePause(item.id);
                          }}
                        >
                          <img src={item.image} alt={item.name} />

                          <div>
                            <strong>
                              {index + 1}. {item.name}
                            </strong>

                            <footer>
                              <button
                                type="button"
                                className="playButton"
                                onClick={() => {
                                  playAudioWithFade(item.audio, 250);
                                  handlePlay(item.id);
                                }}
                              >
                                <FaPlayCircle size={24} color="#33ff7a" />
                              </button>
                              <button
                                type="button"
                                className="pauseButton"
                                onClick={() => {
                                  pauseAudioWithFade(item.audio, 250);
                                  handlePause(item.id);
                                }}
                              >
                                <FaPauseCircle size={24} color="#33ff7a" />
                              </button>

                              <a href={item.uri}>
                                <FaSpotify size={24} color="#fff" />
                              </a>
                            </footer>
                          </div>
                        </TopTrack>
                      ),
                    )}
                  </TopTracksList>
                </ArtistTopTracks>

                <RelatedArtists>
                  <div>
                    <h3>Artistas relacionados</h3>

                    <nav>
                      <button
                        type="button"
                        disabled={!slideRelatedArtists}
                        onClick={handleSlideRelatedArtists}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        type="button"
                        disabled={slideRelatedArtists}
                        onClick={handleSlideRelatedArtists}
                      >
                        <FaChevronRight />
                      </button>
                    </nav>
                  </div>

                  <RelatedArtistsList slideRelatedArtists={slideRelatedArtists}>
                    {relatedArtistsWithTransition.map(
                      ({ item, key, props }, index) => (
                        <RelatedArtist key={key} style={props}>
                          <img src={item.image} alt={item.name} />

                          <div>
                            <strong>
                              {index + 1}. {item.name}
                            </strong>

                            <footer>
                              <p>{item.genres.join(', ')}</p>

                              <a href={item.uri}>
                                <FaSpotify size={24} color="#fff" />
                              </a>
                            </footer>
                          </div>
                        </RelatedArtist>
                      ),
                    )}
                  </RelatedArtistsList>
                </RelatedArtists>
              </Content>
            </Scroll>

            <CloseModal type="button" onClick={setIsOpen}>
              <FaTimes size={28} color="#f7415f" />
            </CloseModal>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalArtist;
