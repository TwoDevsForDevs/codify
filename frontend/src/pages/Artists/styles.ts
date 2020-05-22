import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;

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
  margin-right: 100px;

  display: flex;
  flex-direction: column;

  h1 {
    width: 345px;
    font-size: 64px;
    color: #fff;
    height: 252px;
    position: relative;
    overflow-wrap: break-word;

    div {
      line-height: 93.6px;
      position: absolute;
      top: 0px;
      overflow: hidden;

      span {
        display: inline-block;

        transform: ${props =>
          props.mount ? "translateY(0)" : "translateY(110%)"};
        transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    .word-container:nth-child(1) {
      left: 0px;

      span {
        transition-delay: 0.2s;
      }
    }

    .word-container:nth-child(2) {
      top: 72px;
      left: 0px;

      span {
        transition-delay: 0.3s;
      }
    }

    .word-container:nth-child(3) {
      top: 72px;
      left: 200.375px;

      span {
        transition-delay: 0.4s;
      }
    }

    .word-container:nth-child(4) {
      top: 144px;
      left: 0px;

      span {
        transition-delay: 0.5s;
      }
    }

    .green {
      color: #33ff7a;
    }
  }

  p {
    font-size: 20px;
    line-height: 2;

    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.8s;
  }
`;

export const TopArtists = styled.div<IMountProps>`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr) minmax(
      250px,
      1fr
    );
  grid-gap: 24px;
`;

export const Artist = styled.div<IMountProps>`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  opacity: ${props => (props.mount ? "1" : "0")};
  transform: ${props => (props.mount ? "scale(1)" : "scale(0.8)")};
  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.8s;

  img {
    width: 250px;
    height: 250px;
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
      font-size: 12px;
    }

    h3 {
      font-size: 20px;
    }
  }

  .popularity {
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
