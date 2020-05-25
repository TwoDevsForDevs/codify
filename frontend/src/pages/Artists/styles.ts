import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
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

  h1 {
    font-size: 64px;
    color: #fff;
    line-height: 1.25;

    display: flex;
    flex-wrap: wrap;

    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.3s;

    .green {
      color: #33ff7a;
    }
  }

  p {
    font-size: 20px;
    line-height: 2;
    margin-top: 32px;

    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.8s;
  }
`;

export const TopArtists = styled.div<IMountProps>`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 24px;
`;

export const Artist = styled(animated.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 230px;
  height: 230px;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    transition-delay: 0.3s;
  }

  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
    transition-delay: 0.45s;
  }

  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 7;
    transition-delay: 0.65s;
  }

  &:nth-child(4) {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    transition-delay: 0.85s;
  }

  &:nth-child(5) {
    grid-row-start: 2;
    grid-column-start: 4;
    grid-column-end: 6;
    transition-delay: 1.05s;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.8;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
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
      margin-top: 8px;
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
    transform: translateY(56px);
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      visibility 1s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.4s;
  }
`;

export const ArtistInfo = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #fff;

  display: flex;
  flex-direction: column;

  .followers {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translateY(40px);

    span {
      font-weight: bold;
      font-size: 10px;
    }

    h3 {
      font-size: 20px;
      width: fit-content;
    }
  }

  .popularity {
    white-space: nowrap;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translateY(80px);

    span {
      font-weight: bold;
      font-size: 12px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;
