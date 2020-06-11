import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Scroll = styled(PerfectScrollbar)`
  max-height: 583px;
  padding-right: 40px;
  width: 100%;

  display: flex;
  align-items: flex-start;

  .ps__rail-y {
    margin: 32px 0px;
    opacity: 1 !important;
    width: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;

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
`;

export default Scroll;
