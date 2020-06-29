import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { fade, fadeUp, fadeScaleDown } from '../../../styles/animations';

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
      border-radius: 10px;

      opacity: 0;
      animation: ${fadeScaleDown} 1.3s forwards cubic-bezier(0.19, 0.8, 0.28, 1);
      animation-delay: 0.1s;
    }
  }

  a {
    width: 100%;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.4s;

    justify-content: center;
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
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    line-height: 1.14;
    color: #fff;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.7s;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const Genres = styled.div`
  margin: 24px 0;

  display: flex;
  align-items: center;

  span {
    background: #424548;
    color: #fff;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 24px;
    font-size: 14px;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.9s;

    & + span {
      margin-left: 16px;
    }
  }

  @media (max-width: 992px) {
    margin: 16px 0;
    flex-wrap: wrap;

    span {
      padding: 8px 12px;
      font-size: 12px;

      & + span {
        margin-left: 0px;
      }
    }
  }
`;

export const ArtistInfo = styled.section`
  width: 100%;

  display: flex;
  align-items: center;

  .followers {
    margin-left: 24px;
  }

  > div {
    background: #2d2f30;
    border-radius: 10px;
    width: 100%;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);

    display: flex;
    align-items: center;

    &:nth-child(1) {
      animation-delay: 1.1s;
    }

    &:nth-child(2) {
      animation-delay: 1.2s;
    }

    div[role='button'] {
      width: 80px !important;
      height: 80px !important;
      margin: 0 !important;
    }

    .info {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        font-weight: bold;
      }

      strong {
        color: #fff;
        margin-top: 8px;
        font-size: 18px;
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    .followers {
      margin-left: 0px;
      margin-top: 12px;
    }
  }

  @media (max-width: 992px) {
    > div {
      div[role='button'] {
        width: 64px !important;
        height: 64px !important;
      }

      .info {
        span {
          font-size: 12px;
        }

        strong {
          font-size: 16px;
          margin-top: 0px;
        }
      }
    }
  }
`;

export const ArtistTopTracks = styled.section`
  width: 100%;
  margin-top: 32px;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 24px;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 1.3s;

    display: flex;
    justify-content: space-between;

    h3 {
      color: #fff;
    }

    nav {
      display: flex;

      button {
        background: none;
        border: 0;

        &:disabled {
          pointer-events: none;
        }

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
  }

  @media (max-width: 992px) {
    margin-top: 24px;

    > div {
      h3 {
        font-size: 18px;
      }

      button {
        & + button {
          margin-left: 24px;
        }
      }
    }
  }
`;

interface ITopTracksList {
  slideTracks: boolean;
}

export const TopTracksList = styled.ul<ITopTracksList>`
  max-width: 608px;
  width: 100%;

  display: flex;

  transform: ${props =>
    props.slideTracks
      ? 'translate3d(calc(-100% - 15px), 0px, 0px)'
      : 'translate3d(calc(0% - 0px), 0px, 0px)'};
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
`;

interface IIsPlaying {
  playing: number;
}

export const TopTrack = styled(animated.li)<IIsPlaying>`
  min-width: 192px;
  height: 256px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.8s;

  display: flex;
  flex-direction: column;

  & + li {
    margin-left: 16px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    div {
      height: 108px;

      strong {
        position: absolute;
        top: 0;

        margin-top: 16px;
        height: 40px;
        white-space: normal;
      }

      button,
      a {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: transform 0.3s;
  }

  div {
    position: absolute;
    bottom: 0;

    background: #272727;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 64px;
    width: 100%;
    padding: 0 16px;
    z-index: 99;
    transition: height 0.3s;

    display: flex;
    align-items: center;

    strong {
      display: block;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    footer {
      margin-top: 48px;

      display: flex;
      align-items: center;

      button {
        visibility: hidden;
        background: none;
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
        margin-left: 8px;
        opacity: 0;
        visibility: hidden;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const RelatedArtists = styled.section`
  width: 100%;
  margin-top: 32px;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 24px;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 1.5s;

    display: flex;
    justify-content: space-between;

    h3 {
      color: #fff;
    }

    nav {
      display: flex;

      button {
        background: none;
        border: 0;

        &:disabled {
          pointer-events: none;
        }

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
  }

  @media (max-width: 992px) {
    margin-top: 24px;

    > div {
      h3 {
        font-size: 18px;
      }

      button {
        & + button {
          margin-left: 24px;
        }
      }
    }
  }
`;

interface IRelatedArtistsList {
  slideRelatedArtists: boolean;
}

export const RelatedArtistsList = styled.ul<IRelatedArtistsList>`
  max-width: 608px;
  width: 100%;

  display: flex;

  transform: ${props =>
    props.slideRelatedArtists
      ? 'translate3d(calc(-100% - 15px), 0px, 0px)'
      : 'translate3d(calc(0% - 0px), 0px, 0px)'};
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const RelatedArtist = styled(animated.li)`
  min-width: 192px;
  height: 256px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 1.4s;

  display: flex;
  flex-direction: column;

  & + li {
    margin-left: 16px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    div {
      height: 132px;

      strong {
        position: absolute;
        top: 0;

        margin-top: 16px;
      }

      footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p,
        a {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: transform 0.3s;
  }

  div {
    position: absolute;
    bottom: 0;

    background: #272727;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 64px;
    width: 100%;
    padding: 0 16px;
    z-index: 99;
    transition: height 0.3s;

    display: flex;
    align-items: center;

    strong {
      display: block;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    footer {
      margin-top: 48px;

      display: none;

      p {
        visibility: hidden;
        opacity: 0;
        font-size: 12px;
        color: #7a8185;
        font-weight: 500;
        line-height: 1.3;

        position: absolute;
        top: 44px;
      }

      a {
        visibility: hidden;
        opacity: 0;
        margin-top: 24px;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.2);
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

  opacity: 0;
  animation: ${fade} 1s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 0.8s;

  display: flex;
  justify-content: center;
  align-items: center;

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
