import styled from 'styled-components';
import { animated } from 'react-spring';

import { fadeUp } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
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
      font-size: 40px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;

      .green {
        width: 343px;
      }
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const TopArtists = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    width: 320px;
    grid-template-columns: 1fr;
  }
`;

export const Artist = styled(animated.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 240px;
  height: 240px;
  cursor: pointer;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.05s;

  &:hover > img {
    transform: scale(1.1);
  }

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 7;
  }

  &:nth-child(4) {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }

  &:nth-child(5) {
    grid-row-start: 2;
    grid-column-start: 4;
    grid-column-end: 6;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.8;
    transition: all 0.3s;
  }

  .name {
    color: #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
    padding-right: 16px;

    display: flex;
    flex-direction: column;

    h3 {
      width: fit-content;
      font-size: 24px;
      border-radius: 12px;
      line-height: 1.2;
    }

    span {
      font-weight: bold;
      width: fit-content;
    }
  }

  &:hover .followers {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      visibility 1s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.2s;
  }

  &:hover .popularity {
    visibility: visible;
    opacity: 1;
    transform: translateY(44px);
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      visibility 1s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.4s;
  }

  &:hover .top-track {
    visibility: visible;
    opacity: 1;
    transform: translateY(88px);
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      visibility 1s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.6s;
  }

  div.playingAnimationContainer {
    position: absolute;
    right: 16px;
    top: 16px;
    background: #121212;
    width: 25px;
    height: 25px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      padding-left: 2px;
    }
  }

  .lineGraph {
    display: none;
  }

  &:hover svg {
    &.playCircle {
      display: none;
    }
  }

  &:hover .lineGraph {
    display: flex;
  }

  @media (max-width: 992px) {
    grid-column: initial !important;
    grid-row-start: initial !important;
    width: 100%;
    height: 100%;

    div.playingAnimationContainer {
      width: 40px;
      height: 40px;

      svg {
        padding-left: 3px;
        width: 20px;
        height: 20px;
      }
    }

    .lineGraph div {
      width: 4px;
      height: 18px;
    }

    .name {
      h3 {
        font-size: 32px;
      }

      span {
        font-size: 20px;
      }
    }

    &:hover .followers {
      transform: translateY(0);
    }

    &:hover .popularity {
      transform: translateY(70px);
    }

    &:hover .top-track {
      transform: translateY(140px);
    }
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;

    .name {
      h3 {
        font-size: 28px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;

export const ArtistInfo = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #fff;
  width: 200px;

  display: flex;
  flex-direction: column;

  .info {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    width: 100%;

    span {
      font-weight: bold;
      font-size: 10px;
    }

    h4 {
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .followers {
    transform: translateY(40px);
  }

  .popularity {
    transform: translateY(80px);
  }

  .top-track {
    transform: translateY(120px);
  }

  @media (max-width: 992px) {
    width: 300px;

    .info {
      span {
        font-size: 20px;
      }

      h4 {
        font-size: 24px;
        line-height: initial;
      }
    }

    .followers {
      transform: translateY(40px);
    }

    .popularity {
      transform: translateY(110px);
    }

    .top-track {
      transform: translateY(180px);
    }
  }

  @media (max-width: 768px) {
    .info {
      span {
        font-size: 18px;
      }

      h4 {
        font-size: 22px;
        line-height: initial;
      }
    }
  }
`;
