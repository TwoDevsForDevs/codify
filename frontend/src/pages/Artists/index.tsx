/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useCallback } from "react";
import { useTransition } from "react-spring";
import { FaHeadphones } from "react-icons/fa";

import Header from "../../components/Header";

import { useAuth } from "../../hooks/auth";

import formatValue from "../../utils/formatValue";
import getPopularity from "../../utils/getPopularity";

import api from "../../services/api";

import {
  Container,
  Main,
  Content,
  LeftContent,
  TopArtists,
  Artist,
  ArtistInfo,
} from "./styles";

interface IArtistImages {
  url: string;
}

interface IArtistFollwers {
  total: number;
}

interface ITopArtists {
  id: string;
  name: string;
  images: IArtistImages[];
  type: string;
  uri: string;
  followers: IArtistFollwers;
  formattedFollowers: number;
  popularity: number;
  popularityTag: string;
  audio: HTMLAudioElement;
}

const Artists: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ITopArtists[]>([]);
  const [firstTopArtist, setFirstTopArtist] = useState<ITopArtists>(
    {} as ITopArtists,
  );
  const [mount, setMount] = useState(false);

  const { getCredentials } = useAuth();

  const playAudioWithFade = useCallback(audio => {
    let volCounter = 0;
    audio.volume = 0;

    setTimeout(() => {
      audio.play();

      const volumeFade = setInterval(() => {
        volCounter++;
        audio.volume = volCounter / 20;
      }, 100);

      setTimeout(() => {
        clearInterval(volumeFade);
      }, 1000);
    }, 500);
  }, []);

  const pauseAudioWithFade = useCallback(audio => {
    let volCounter = audio.volume * 10;

    const volumeFade = setInterval(() => {
      volCounter--;
      audio.volume = Math.max(volCounter / 10, 0);
    }, 100);

    setTimeout(() => {
      clearInterval(volumeFade);
      audio.pause();
    }, 1000);
  }, []);

  useEffect(() => {
    getCredentials();

    async function loadTopArtists(): Promise<void> {
      const response = await api.get("/me/top-artists");

      const data = response.data.map((artist: ITopArtists) => ({
        ...artist,
        formattedFollowers: formatValue(artist.followers.total),
        popularityTag: getPopularity(artist.popularity),
        audio: new Audio(
          "https://p.scdn.co/mp3-preview/07c282084563ef61b97b04a0f82b4e7235c8b6ee?cid=3990f465a79b4b2bbd49712c5daf7b0c",
        ),
      }));

      console.log(data);
      setTopArtists(data);
      setFirstTopArtist(data[0]);
      setMount(true);
    }

    loadTopArtists();
  }, [getCredentials]);

  const artistsWithTransition = useTransition(
    topArtists,
    topArtist => topArtist.id,
    {
      from: {
        opacity: 0,
        transform: "scale(0.8)",
      },
      enter: {
        opacity: 1,
        transform: "scale(1)",
      },
    },
  );

  return (
    <Container>
      <Header />

      <Main>
        <Content>
          <LeftContent mount={mount}>
            <div>
              <FaHeadphones size={32} color="#fff" />
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

                <ArtistInfo>
                  <div className="followers">
                    <span>Seguidores</span>
                    <h4>{item.formattedFollowers}</h4>
                  </div>
                  <div className="popularity">
                    <span>Popularidade</span>
                    <h4>{item.popularityTag}</h4>
                  </div>
                </ArtistInfo>
              </Artist>
            ))}
          </TopArtists>
        </Content>
      </Main>
    </Container>
  );
};

export default Artists;
