import React, { useState, useEffect } from "react";

import Header from "../../components/Header";

import { useAuth } from "../../hooks/auth";

import formatValue from "../../utils/formatValue";
import getPopularity from "../../utils/getPopularity";

import api from "../../services/api";

import {
  Container,
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
}

const Artists: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ITopArtists[]>([]);
  const [firstTopArtist, setFirstTopArtist] = useState<ITopArtists>(
    {} as ITopArtists,
  );
  const [mount, setMount] = useState(false);

  const { getCredentials } = useAuth();

  useEffect(() => {
    getCredentials();

    async function loadTopArtists(): Promise<void> {
      const response = await api.get("/me/top-artists");

      const data = response.data.map((artist: ITopArtists) => ({
        ...artist,
        formattedFollowers: formatValue(artist.followers.total),
        popularityTag: getPopularity(artist.popularity),
      }));

      console.log(data);
      setTopArtists(data);
      setFirstTopArtist(data[0]);
      setMount(true);
    }

    loadTopArtists();
  }, [getCredentials]);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <LeftContent mount={mount}>
            <h1>
              <div className="word-container">
                <span>Escutando</span>
              </div>
              {/* <div className="word-container">
                <span>como</span>
              </div>
              <div className="word-container">
                <span>você</span>
              </div> */}
              <div className="word-container green">
                <span>{firstTopArtist.name}</span>
              </div>
            </h1>
            <p>
              Quando se trata dos seus artistas favoritos, ninguem faz igual a/o
              <strong> {firstTopArtist.name}!</strong>
            </p>
          </LeftContent>

          <TopArtists mount={mount}>
            {topArtists.map((artist, index) => (
              <Artist key={artist.id} mount={mount}>
                <img src={artist.images[0].url} alt={artist.name} />
                <div className="name">
                  <span>#{index + 1}</span>
                  <h3>{artist.name}</h3>
                </div>
                <ArtistInfo>
                  <div className="followers">
                    <span>Seguidores</span>
                    <h4>{artist.formattedFollowers}</h4>
                  </div>
                  <div className="popularity">
                    <span>Popularidade</span>
                    <h4>{artist.popularityTag}</h4>
                  </div>
                </ArtistInfo>
              </Artist>
            ))}
          </TopArtists>
        </Content>
      </Container>
    </>
  );
};

export default Artists;
