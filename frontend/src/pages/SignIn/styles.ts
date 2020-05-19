import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 600px;
    animation: ${imageAnimation} 0.5s ease-in-out;
  }
`;

const showButton = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  tp {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface ISignInContainerProps {
  mount: boolean;
}

export const SignInContainer = styled.div<ISignInContainerProps>`
  width: 500px;
  margin-right: 40px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 70px;
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
      left: 220.375px;

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
      color: #1ed760;
    }
  }

  p {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 2;
    opacity: ${props => (props.mount ? "1" : "0")};
    transform: ${props => (props.mount ? "translateY(0)" : "translateY(40px)")};
    transition-delay: 0.2s;
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  a {
    background: #1ed760;
    color: #fff;
    font-weight: bold;
    width: fit-content;
    padding: 32px 54px;
    border-radius: 10px;
    opacity: ${props => (props.mount ? "1" : "0")};
    animation: ${showButton} 0.5s;
    animation-delay: 1s;
    transition: background 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      background: ${shade(0.1, "#1ed760")};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const SignUpContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 14px;

  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-weight: 500;
  }

  a {
    color: #1ed760;
    font-weight: bold;
    margin-top: 8px;
  }
`;
