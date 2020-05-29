import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.main`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px 32px;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

interface IMountProps {
  mount: boolean;
}

export const LeftContent = styled.div<IMountProps>`
  margin-right: 72px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    background: linear-gradient(134.4deg, #20ac9a, #1db954 52%, #91c040);
    padding: 16px;
    border-radius: 10px;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.1s;

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

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.3s;

    .green {
      color: #33ff7a;
    }
  }

  p {
    font-size: 18px;
    line-height: 2;

    opacity: ${props => (props.mount ? '1' : '0')};
    transform: ${props => (props.mount ? 'translateY(0)' : 'translateY(40px)')};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.5s;
  }
`;

export const TopArtists = styled.div<IMountProps>`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 24px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Artist = styled(animated.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 240px;
  height: 240px;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover > img {
    transform: scale(1.1);
  }

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    transition-delay: 0.1s;
  }

  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
    transition-delay: 0.3s;
  }

  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 7;
    transition-delay: 0.5s;
  }

  &:nth-child(4) {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    transition-delay: 0.7s;
  }

  &:nth-child(5) {
    grid-row-start: 2;
    grid-column-start: 4;
    grid-column-end: 6;
    transition-delay: 0.9s;
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
    background: #000;
    width: 25px;
    height: 25px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover svg {
    &.playCircle {
      opacity: 0;
    }

    &.circleNotch {
      animation: ${rotate} 1s linear infinite;
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
`;
