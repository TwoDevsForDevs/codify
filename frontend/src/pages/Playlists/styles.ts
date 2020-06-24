import styled from 'styled-components';
import { animated } from 'react-spring';

import { fadeUp } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.3s;

    display: flex;
    flex-wrap: wrap;

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

  @media (max-width: 1220px) {
    position: relative;
    top: 0px;
    margin-right: 0px;
    margin-bottom: 32px;

    align-items: center;

    div {
      padding: 14px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    h1 {
      margin: 24px 0;
      font-size: 52px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 992px) {
    div {
      padding: 14px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    h1 {
      margin: 24px 0;
      font-size: 40px;
      text-align: center;

      display: flex;
      flex-direction: column;

      .green {
        margin-left: 0px;
      }
    }

    p {
      font-size: 14px;
    }
  }
`;

export const UserPlaylists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Playlist = styled(animated.div)`
  border-radius: 10px;
  width: 240px;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.05s;

  &:hover > img {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 240px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 0.3s;
  }

  div {
    background: #272727;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 64px;
    padding: 0 16px;
    z-index: 99;

    display: flex;
    align-items: center;

    strong {
      display: block;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 992px) {
    width: 100%;

    img {
      height: 100%;
    }

    div {
      height: 48px;

      strong {
        font-size: 14px;
      }
    }
  }
`;
