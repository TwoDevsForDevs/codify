import React, { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { GiMicrophone } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';

import LineGraphAnimated from '../../components/LineGraphAnimated';
import Spinner from '../../components/Spinner';

import formatValue from '../../utils/formatValue';
import getPopularity from '../../utils/getPopularity';
import { playAudioWithFade, pauseAudioWithFade } from '../../utils/audio';

import api from '../../services/api';

import {
  Container,
  LeftContent,
  TopArtists,
  Artist,
  ArtistInfo,
} from './styles';

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
  formattedFollowers: number;
  popularity: number;
  popularityTag: string;
  audio: HTMLAudioElement;
  topTrackPreview: string;
  topTrackName: string;
}

const Artists: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ITopArtists[]>([]);
  const [firstTopArtist, setFirstTopArtist] = useState<ITopArtists>(
    {} as ITopArtists,
  );
  const [mount, setMount] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadTopArtists(): Promise<void> {
      setLoading(true);

      const response = await api.get('/me/top-artists');

      const data = response.data.map((artist: ITopArtists) => ({
        ...artist,
        formattedFollowers: formatValue(artist.followers.total),
        popularityTag: getPopularity(artist.popularity),
        audio: new Audio(`${artist.topTrackPreview}`),
      }));

      setTopArtists(data);
      setFirstTopArtist(data[0]);
      setLoading(false);

      setTimeout(() => {
        setMount(true);
      }, 100);
    }

    loadTopArtists();
  }, []);

  const artistsWithTransition = useTransition(
    topArtists,
    topArtist => topArtist.id,
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
          <LeftContent mount={mount}>
            <div>
              <GiMicrophone size={32} color="#fff" />
            </div>
            <h1>
              Escutando
              <span className="green">{firstTopArtist.name}</span>
            </h1>
            <p>
              Quando se trata dos seus artistas favoritos, ninguém faz igual a/o
              <strong> {firstTopArtist.name}!</strong>
            </p>
          </LeftContent>

          <TopArtists mount={mount}>
            {artistsWithTransition.map(({ item, key, props }, index) => (
              <Artist
                key={key}
                style={props}
                onMouseEnter={() => playAudioWithFade(item.audio)}
                onMouseLeave={() => pauseAudioWithFade(item.audio)}
              >
                <img src={item.images[0].url} alt={item.name} />
                <div className="name">
                  <span>#{index + 1}</span>
                  <h3>{item.name}</h3>
                </div>
                <div className="playingAnimationContainer">
                  <FaPlay className="playCircle" size={12} color="#1DB954" />
                  <LineGraphAnimated className="lineGraph" />
                </div>

                <ArtistInfo>
                  <div className="info followers">
                    <span>Seguidores</span>
                    <h4>{item.formattedFollowers}</h4>
                  </div>
                  <div className="info popularity">
                    <span>Popularidade</span>
                    <h4>{item.popularityTag}</h4>
                  </div>
                  <div className="info top-track">
                    <span>Mais tocada</span>
                    <h4>{item.topTrackName}</h4>
                  </div>
                </ArtistInfo>
              </Artist>
            ))}
          </TopArtists>
        </>
      )}
    </Container>
  );
};

export default Artists;
