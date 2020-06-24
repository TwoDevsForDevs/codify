import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import {
  fade,
  fadeUp,
  fadeScaleDown,
  scaleDown,
} from '../../../styles/animations';

export const Container = styled.div`
  display: flex;
`;

export const LeftContent = styled.aside`
  padding-bottom: 56px;
  margin-right: 104px;

  position: sticky;
  top: 10px;

  div {
    width: 400px;
    height: 400px;
    margin-bottom: 16px;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      opacity: 0;
      animation: ${fadeScaleDown} 1.3s forwards cubic-bezier(0.19, 0.8, 0.28, 1);
      animation-delay: 0.1s;
    }
  }

  a {
    width: 100%;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 0.8, 0.28, 1);
    animation-delay: 0.4s;
  }

  @media (max-width: 1220px) {
    margin-right: 48px;
  }

  @media (max-width: 992px) {
    padding-bottom: 24px;
    width: 100%;

    div {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    position: initial;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    line-height: 1.14;
    color: #fff;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.6s;
  }

  @media (max-width: 1220px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const PlaylistInfo = styled.section`
  margin: 24px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 0;
  animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 0.8s;

  aside {
    display: flex;
    align-items: center;

    div {
      background: rgba(51, 255, 122, 0.15);
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      padding: 10px 14px;
      border-radius: 26px;

      display: flex;
      align-items: center;

      & + div {
        margin-left: 8px;
      }

      svg {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }

      strong {
        margin-right: 4px;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;

      & + button {
        margin-left: 32px;
      }

      svg {
        color: #7a8185;
        transition: color 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1220px) {
    margin: 16px 0;

    aside {
      div {
        font-size: 12px;
        padding: 8px 12px;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`;

export const TracksList = styled.section`
  padding-bottom: 56px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1220px) {
    padding-bottom: 42px;
  }
`;

interface IIsPlaying {
  playing: number;
}

export const Track = styled(animated.div)<IIsPlaying>`
  background: #252527;
  padding: 0 24px;
  border-radius: 10px;
  height: 80px;

  display: flex;
  align-items: center;

  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
    transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.2s;

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

      animation: ${scaleDown} 1.3s forwards cubic-bezier(0.2, 0.6, 0.35, 1);
      animation-delay: 0.8s;
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

      svg {
        width: 24px;
        height: 24px;
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

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 1200px) {
    .track-image {
      display: none;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    padding: 16px 24px;

    .track-info {
      margin-right: 16px;

      strong {
        font-size: 16px;
      }
    }

    aside {
      button {
        svg {
          width: 22px;
          height: 22px;
        }
      }

      a {
        margin-left: 12px;

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;

export const CloseModal = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 16px;
  top: 40px;
  margin-right: 4px;
  transition: transform 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  animation: ${fade} 1s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 0.8s;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 992px) {
    margin-right: 0;
    top: 8px;
    right: 8px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
