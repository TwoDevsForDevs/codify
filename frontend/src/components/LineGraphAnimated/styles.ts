import styled, { keyframes } from 'styled-components';

const animateLine = keyframes`
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
`;

export const Container = styled.div`
  display: flex;

  div {
    width: 2px;
    height: 10px;
    border-radius: 2px;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: #1db954;

    & + div {
      margin-left: 1px;
    }

    &.line1 {
      animation: ${animateLine} 0.8s linear infinite;
    }

    &.line2 {
      animation: ${animateLine} 1s linear infinite;
    }

    &.line3 {
      animation: ${animateLine} 0.8s linear infinite;
    }

    &.line4 {
      animation: ${animateLine} 1.2s linear infinite;
    }
  }
`;
