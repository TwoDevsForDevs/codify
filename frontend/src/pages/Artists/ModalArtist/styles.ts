import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
`;

interface IModal {
  mount: number;
}

export const LeftContent = styled.aside<IModal>`
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

      opacity: ${props => (props.mount ? '1' : '0')};
      clip-path: ${props =>
        props.mount
          ? 'inset(0px 0px 0px 0px round 10px)'
          : 'inset(0px 100% 100% 0px round 10px)'};
      transform: ${props =>
        props.mount ? 'scale3d(1, 1, 1)' : 'scale3d(2.2, 2.2, 2.2)'};
      transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
        clip-path 1s cubic-bezier(0.19, 1, 0.22, 1),
        transform 1.5s cubic-bezier(0.2, 0.6, 0.35, 1);
      transition-delay: 0.1s;
    }
  }

  a {
    width: 100%;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.4s;

    justify-content: center;
  }
`;

export const Content = styled.div<IModal>`
  width: 100%;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    line-height: 1.14;
    color: #fff;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props =>
      props.mount ? 'translateY(0px)' : 'translateY(40px)'};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.6s;
  }
`;

export const Genres = styled.div<IModal>`
  margin: 24px 0;

  display: flex;
  align-items: center;

  span {
    background: #2c2f30;
    color: #fff;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 24px;
    font-size: 14px;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props =>
      props.mount ? 'translateY(0px)' : 'translateY(40px)'};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.8s;

    & + span {
      margin-left: 16px;
    }
  }
`;

export const ArtistInfo = styled.section<IModal>`
  width: 100%;

  display: flex;
  align-items: center;

  > div {
    background: #2d2f30;
    border-radius: 10px;
    width: 100%;

    display: flex;
    align-items: center;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props =>
      props.mount ? 'translateY(0px)' : 'translateY(40px)'};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);

    &:nth-child(1) {
      transition-delay: 1s;
    }

    &:nth-child(2) {
      transition-delay: 1.1s;
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

  .followers {
    margin-left: 24px;
  }
`;

export const ArtistTopTracks = styled.section<IModal>`
  width: 100%;
  margin-top: 32px;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 24px;

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
      height: 128px;

      strong {
        position: absolute;
        top: 0;
        margin-top: 16px;
      }

      button {
        visibility: visible;
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

    button {
      visibility: hidden;
      background: none;
      border: 0;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
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
      height: 128px;

      strong {
        position: absolute;
        top: 0;
        margin-top: 16px;
      }

      button {
        visibility: visible;
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
  }
`;

export const CloseModal = styled.button<IModal>`
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

  opacity: ${props => (props.mount ? '1' : '0')};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1) 0.8s, transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
