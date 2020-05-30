import styled, { css } from 'styled-components';

interface IModal {
  visible: boolean;
}

export const Background = styled.div<IModal>`
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.5);

  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.1s;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div<IModal>`
  max-width: 1240px;
  width: 100%;
  height: 640px;
  overflow: hidden;
  overflow-y: scroll;
  background: #191919;
  border-radius: 16px;
  padding: 56px 56px 0;
  z-index: 9999;

  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.1s;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-start;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1db954;
  }
`;

export const Info = styled.aside`
  padding-bottom: 56px;
  margin-right: 104px;

  position: sticky;
  top: 20px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  a {
    width: 100%;

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
}

export const Track = styled.div<IIsPlaying>`
  background: #252527;
  padding: 0 24px;
  border-radius: 10px;
  height: 80px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  img {
    width: 80px;
    margin-right: 16px;
  }

  div {
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
