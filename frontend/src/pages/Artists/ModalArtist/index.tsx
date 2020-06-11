import React, { useEffect, useState, useCallback } from 'react';
import {
  FaSpotify,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
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

import { Container, LeftContent, Content, Genres, ArtistInfo } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  artistId: string;
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
}

const ModalArtist: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  artistId,
}) => {
  const [artist, setArtist] = useState<IArtist>({} as IArtist);
  const [loading, setLoading] = useState(true);
  const [mount, setMount] = useState(0);

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

        console.log(artistData);

        setArtist(artistData);
        setTimeout(() => {
          setMount(1);
        }, 100);
      } catch (err) {
        toast.error('Não foi possível carregar as informações do artista.');
      } finally {
        setLoading(false);
      }
    }

    loadArtist();
  }, [artistId]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {loading ? (
          <Spinner width={48} height={48} />
        ) : (
          <>
            <Scroll>
              <LeftContent mount={mount}>
                <div>
                  <img src={artist.avatar} alt={artist.name} />
                </div>

                <SpotifyButton href={ArtistInfo.uri}>
                  Abrir no Spotify
                </SpotifyButton>
              </LeftContent>

              <Content mount={mount}>
                <h1>{artist.name}</h1>
                <Genres mount={mount}>
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
              </Content>
            </Scroll>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalArtist;
