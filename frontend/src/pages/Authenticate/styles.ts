import styled, { keyframes } from 'styled-components';

const logoAnimated = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-24px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  height: 100%;
  animation: ${logoAnimated} 1.5s infinite ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
`;
