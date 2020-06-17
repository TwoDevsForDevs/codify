import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { fadeUp } from '../../styles/animations';

const wordUp = keyframes`
  from {
    transform: translateY(110%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeScaleUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeLeft = keyframes`
  from {
    transform: translateX(80px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 1366px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInContainer = styled.div`
  width: 500px;
  margin-right: 120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 72px;
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
        overflow: hidden;

        transform: translateY(110%);
        animation: ${wordUp} 0.8s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    .word-container:nth-child(1) {
      left: 0px;

      span {
        animation-delay: 0.2s;
      }
    }

    .word-container:nth-child(2) {
      top: 72px;
      left: 0px;

      span {
        animation-delay: 0.3s;
      }
    }

    .word-container:nth-child(3) {
      top: 72px;
      left: 230.375px;

      span {
        animation-delay: 0.4s;
      }
    }

    .word-container:nth-child(4) {
      top: 144px;
      left: 0px;

      span {
        animation-delay: 0.5s;
      }
    }

    .green {
      color: #33ff7a;
    }
  }

  p {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 2;

    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 0.8s;
  }

  a {
    opacity: 0;
    animation: ${fadeUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 1s;
  }
`;

export const ArtistImage = styled.div`
  opacity: 0;
  animation: ${fadeScaleUp} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 0.8s;

  img {
    width: 600px;
  }
`;

export const SignUpContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  font-size: 16px;

  opacity: 0;
  animation: ${fadeLeft} 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: 1s;

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
      color: ${lighten(0.03, '#1db954')};
    }
  }
`;
