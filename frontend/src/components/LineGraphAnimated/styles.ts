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

// const animateLine2 = keyframes`
//   50% {
//     top: 50px;
//     height: 210px;
//   }
// `;

// const animateLine3 = keyframes`
//   50% {
//     top: 150px;
//     height: 110px;
//   }
// `;

// const animateLine4 = keyframes`
//   50% {
//     top: 70px;
//     height: 190px;
//   }
// `;

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
