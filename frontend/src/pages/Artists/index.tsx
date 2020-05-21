import React, { useState, useEffect } from "react";
import { useTransition } from "react-spring";

import Header from "../../components/Header";

import { useAuth } from "../../hooks/auth";

import api from "../../services/api";

import { Container, Content, LeftContent, TopArtists, Artist } from "./styles";

interface IArtistImages {
  url: string;
}

interface ITopArtists {
  id: string;
  name: string;
  images: IArtistImages[];
  type: string;
  uri: string;
}

const Artists: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ITopArtists[]>([]);
  const [fistTopArtist, setFistTopArtist] = useState<ITopArtists>(
    {} as ITopArtists,
  );
  const [mount, setMount] = useState(false);

  const { getCredentials } = useAuth();

  useEffect(() => {
    getCredentials();

    async function loadTopArtists(): Promise<void> {
      const response = await api.get("/me/top-artists");

      setTopArtists(response.data);
      setFistTopArtist(response.data[0]);
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
                <span>Descubra</span>
              </div>
              <div className="word-container">
                <span>como</span>
              </div>
              <div className="word-container">
                <span>você</span>
              </div>
              <div className="word-container green">
                <span>escuta.</span>
              </div>
            </h1>
            <p>
              Quando se trata dos seus artistas favoritos, ninguem faz igual a/o{" "}
              {fistTopArtist.name}.
            </p>
          </LeftContent>

          <TopArtists mount={mount}>
            {topArtists.map((artist, index) => (
              <Artist key={artist.id} mount={mount}>
                <img src={artist.images[0].url} alt={artist.name} />
                <div>
                  <span>#{index + 1}</span>
                  <h3>{artist.name}</h3>
                </div>
              </Artist>
            ))}
          </TopArtists>
        </Content>
      </Container>
    </>
  );
};

export default Artists;
