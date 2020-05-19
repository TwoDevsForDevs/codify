import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

import edSheeran from "../../assets/ed-sheeran.svg";

import {
  Container,
  Content,
  SignInContainer,
  ArtistImage,
  SignUpContainer,
} from "./styles";

const SignIn: React.FC = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Container>
      <Content>
        <SignInContainer mount={mount}>
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
            Explore diversas músicas no seu perfil e crie playlists incríveis.
          </p>
          <a href="http://localhost:3333/sessions">
            <FaSpotify size={24} color="#fff" />
            Continue com o Spotify
          </a>
        </SignInContainer>

        <ArtistImage mount={mount}>
          <img src={edSheeran} alt="Ed Sheeran" />
        </ArtistImage>

        <SignUpContainer mount={mount}>
          <span>Não possui uma conta no Spotify?</span>
          <a
            href="https://www.spotify.com/br/signup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crie sua conta gratuita agora
          </a>
        </SignUpContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
