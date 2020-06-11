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
    width: 6px;
    background: #252527;
    border-radius: 5px;

    &:hover {
      opacity: 1;
      background: inherit;

      > .ps__thumb-y {
        width: 6px;
      }
    }

    .ps__thumb-y {
      background: #33ff7a;
      height: 60px;
      right: 0px;

      &:hover {
        width: 6px;
      }
    }
  }
`;

export default Scroll;
