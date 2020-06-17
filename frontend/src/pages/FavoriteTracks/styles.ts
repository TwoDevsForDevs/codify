import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { fadeUp } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const LeftContent = styled.div`
  position: sticky;
  top: 71px;
  margin-right: 72px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    background: linear-gradient(134.4deg, #20ac9a, #1db954 52%, #91c040);
    padding: 16px;
    border-radius: 10px;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.1s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 64px;
    color: #fff;
    line-height: 1.25;
    margin: 32px 0;

    display: flex;
    flex-wrap: wrap;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.3s;

    .green {
      color: #33ff7a;
    }
  }

  p {
    font-size: 18px;
    line-height: 2;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.5s;
  }
`;

export const UserFavoriteTracks = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IIsPlaying {
  playing: number;
}

export const Track = styled(animated.div)<IIsPlaying>`
  background: #252527;
  padding: 0 24px;
  border-radius: 10px;
  height: 80px;
  width: 700px;

  display: flex;
  align-items: center;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.05s;

  & + div {
    margin-top: 16px;
  }

  .track-image {
    min-width: 80px;
    width: 80px;
    height: 80px;
    margin-right: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .track-info {
    margin-right: 24px;

    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      color: #fff;
    }

    span {
      color: #7a8185;
      font-size: 14px;
      font-weight: bold;
      margin-top: 8px;
    }
  }

  aside {
    margin-left: auto;

    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
      }
    }

    ${props =>
      props.playing
        ? css`
            .playButton {
              display: none;
            }

            .pauseButton {
              display: block;
            }
          `
        : css`
            .playButton {
              display: block;
            }

            .pauseButton {
              display: none;
            }
          `}

    a {
      margin-left: 16px;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
