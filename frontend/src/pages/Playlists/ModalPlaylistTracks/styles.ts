import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface IModal {
  mount: number;
}

export const LeftContent = styled.aside<IModal>`
  padding-bottom: 56px;
  margin-right: 104px;

  position: sticky;
  top: 20px;

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

export const PlaylistInfo = styled.section<IModal>`
  margin: 24px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.mount ? '1' : '0')};
  transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
    transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.8s;

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
`;

export const TracksList = styled.section`
  padding-bottom: 56px;

  display: flex;
  flex-direction: column;
`;

interface IIsPlaying {
  playing: number;
  mount: number;
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

      transform: ${props => (props.mount ? 'scaleX(1)' : 'scale3d(3,3,3)')};
      transition: transform 1.5s cubic-bezier(0.2, 0.6, 0.35, 1);
      transition-delay: 0.8s;
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

export const CloseModal = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 24px;
  top: 24px;
  transition: transform 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.2);
  }
`;
