import React from 'react';

import edSheeran from '../../assets/ed-sheeran.png';

import SpotifyButton from '../../components/SpotifyButton';

import {
  Container,
  SignInContainer,
  ArtistImage,
  SignUpContainer,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <SignInContainer>
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
          Descubra suas músicas mais escutadas e artistas preferidos da sua
          conta do Spotify.
        </p>
        <SpotifyButton href={`${process.env.REACT_APP_API_URL}sessions`}>
          Continue com o Spotify
        </SpotifyButton>
      </SignInContainer>

      <ArtistImage>
        <img src={edSheeran} alt="Ed Sheeran" />
      </ArtistImage>

      <SignUpContainer>
        <span>Não possui uma conta no Spotify?</span>

        <a
          href="https://www.spotify.com/br/signup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crie sua conta gratuita agora
        </a>
      </SignUpContainer>
    </Container>
  );
};

export default SignIn;
