import styled, { keyframes } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const scrollHeightAnimation = keyframes`
  from {
    height: 0%;
    opacity: 0;
  },
  to {
    max-height: 583px;
    opacity: 1;
  }
`;

const Scroll = styled(PerfectScrollbar)`
  max-height: 583px;
  padding-right: 40px;
  width: 100%;

  display: flex;
  align-items: flex-start;

  .ps__rail-y {
    /* margin: 32px 0px; */
    width: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;

    opacity: 1 !important;
    animation: ${scrollHeightAnimation} 1s forwards
      cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 2s;

    &:hover {
      opacity: 1;
      background: inherit;

      > .ps__thumb-y {
        width: 4px;
      }
    }

    .ps__thumb-y {
      background: #33ff7a;
      width: 4px;
      height: 60px;
      right: 0px;

      &:hover {
        width: 4px;
      }
    }
  }

  @media (max-width: 1200px) {
    .ps__rail-y {
      display: none;
    }
  }

  @media (max-width: 992px) {
    padding-right: 0px;
  }

  @media (max-width: 768px) {
    max-height: 77vh;
    flex-direction: column;
  }
`;

export default Scroll;
