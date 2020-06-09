import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;

  display: flex;
  align-items: flex-start;
`;

interface IModal {
  mount: boolean;
}

export const Info = styled.aside<IModal>`
  padding-bottom: 56px;
  margin-right: 104px;

  position: sticky;
  top: 20px;

  img {
    width: 400px;
    height: 400px;
    margin-bottom: 16px;

    opacity: ${props => (props.mount ? '1' : '0')};
    clip-path: ${props =>
      props.mount
        ? 'inset(0px 0px 0px 0px round 10px)'
        : 'inset(0px 100% 100% 0px round 10px)'};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      clip-path 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.1s;
  }

  a {
    width: 100%;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.3s;

    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    color: #fff;
  }
`;

export const TracksList = styled.section`
  margin-top: 32px;
  padding-bottom: 56px;

  display: flex;
  flex-direction: column;
`;

interface IIsPlaying {
  isPlaying: boolean;
  mount: boolean;
}

export const Track = styled.div<IIsPlaying>`
  background: #252527;
  padding: 0 24px;
  border-radius: 10px;
  height: 80px;

  display: flex;
  align-items: center;

  opacity: ${props => (props.mount ? '1' : '0')};
  transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
    transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.5s;

  & + div {
    margin-top: 16px;
  }

  img {
    width: 80px;
    margin-right: 16px;
  }

  div {
    margin-right: 24px;

    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }

    span {
      margin-top: 8px;
      font-size: 14px;
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
      props.isPlaying
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
