import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTransition } from "react-spring";

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

  // const useHover = <T extends HTMLElement>(): [
  //   (node?: T | null) => void,
  //   boolean,
  // ] => {
  //   const [value, setValue] = useState(false);
  //   const audio = new Audio(
  //     "https://p.scdn.co/mp3-preview/07c282084563ef61b97b04a0f82b4e7235c8b6ee?cid=3990f465a79b4b2bbd49712c5daf7b0c",
  //   );

  //   const handleMouseOver = useCallback(() => {
  //     audio.play();
  //   }, [audio]);
  //   const handleMouseOut = useCallback(() => {
  //     audio.pause();
  //   }, [audio]);

  //   const ref = useRef<T>();

  //   const callbackRef = useCallback<(node?: null | T) => void>(
  //     node => {
  //       if (ref.current) {
  //         ref.current.removeEventListener("mouseover", handleMouseOver);
  //         ref.current.removeEventListener("mouseout", handleMouseOut);
  //       }

  //       ref.current = node || undefined;

  //       if (ref.current) {
  //         ref.current.addEventListener("mouseover", handleMouseOver);
  //         ref.current.addEventListener("mouseout", handleMouseOut);
  //       }
  //     },
  //     [handleMouseOver, handleMouseOut],
  //   );

  //   return [callbackRef, value];
  // };

  // const [hoverRef, isHovered] = useHover();

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
    <>
      <Header />

      <Container>
        <Content>
          <LeftContent mount={mount}>
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
              <Artist key={key} style={props}>
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

          {/* <div ref={hoverRef}>{isHovered ? "TOCANDO" : "NÃO TOCANDO"}</div> */}
        </Content>
      </Container>
    </>
  );
};

export default Artists;
