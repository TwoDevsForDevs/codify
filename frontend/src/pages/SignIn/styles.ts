import styled from "styled-components";
import { lighten } from "polished";

import ball from "../../assets/ball.svg";

export const Container = styled.div`
  height: 100%;
  background-image: url(${ball});
  background-repeat: repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 32px;

  display: flex;
  align-items: center;
`;

interface IMountProps {
  mount: boolean;
}

export const SignInContainer = styled.div<IMountProps>`
  width: 500px;
  margin-right: 152px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 80px;
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
      left: 250.375px;

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
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 2;

    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.8s;
  }

  a {
    background: #1db954;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    width: fit-content;
    padding: 32px 54px;
    border-radius: 10px;

    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    will-change: transform;
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s,
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1) 1s, background 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      background: ${lighten(0.03, "#1db954")};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const ArtistImage = styled.div<IMountProps>`
  opacity: ${props => (props.mount ? "1" : "0")};
  transform: ${props => (props.mount ? "scale(1)" : "scale(0.8)")};
  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s,
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.8s;

  img {
    width: 700px;
  }
`;

export const SignUpContainer = styled.div<IMountProps>`
  position: absolute;
  bottom: 24px;
  left: 24px;
  font-size: 16px;

  opacity: ${props => (props.mount ? "1" : "0")};
  transform: ${props => (props.mount ? "translateX(0)" : "translateX(80px)")};
  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 1s;

  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-weight: bold;
  }

  a {
    color: #1db954;
    font-weight: bold;
    margin-top: 8px;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.03, "#1db954")};
    }
  }
`;
