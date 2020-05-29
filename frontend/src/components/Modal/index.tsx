import React from 'react';
import { FaPlayCircle, FaSpotify, FaTimes } from 'react-icons/fa';

import SpotifyButton from '../SpotifyButton';

import {
  Container,
  Info,
  Content,
  TracksList,
  Track,
  CloseModal,
} from './styles';

const Modal: React.FC = () => {
  return (
    <Container>
      <Info>
        <img
          src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
          alt="xD"
        />
        <SpotifyButton href="#">Abrir no Spotify</SpotifyButton>
      </Info>

      <Content>
        <h1>Músicas da Playlist</h1>

        <TracksList>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
          <Track>
            <img
              src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
              alt="xD"
            />
            <div>
              <strong>1. Matheuzinho xD</strong>
              <span>Xd do d</span>
            </div>

            <aside>
              <a href="/">
                <FaPlayCircle size={24} color="#33ff7a" />
              </a>
              <a href="/">
                <FaSpotify size={24} color="#fff" />
              </a>
            </aside>
          </Track>
        </TracksList>

        <CloseModal type="button">
          <FaTimes />
        </CloseModal>
      </Content>
    </Container>
  );
};

export default Modal;
