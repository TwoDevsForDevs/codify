import styled from 'styled-components';

interface IDropdownMenuProps {
  showDropdown: boolean;
}

export const Container = styled.div<IDropdownMenuProps>`
  background: #19191a;
  padding: 8px 0;
  width: 325px;
  box-shadow: 2px 2px 16px #000;
  z-index: 100;
  position: absolute;
  right: 0px;
  top: 54px;

  visibility: ${props => (props.showDropdown ? 'visible' : 'hidden')};
  clip-path: ${props =>
    props.showDropdown
      ? 'inset(0px 0px 0px 0px round 20px)'
      : 'inset(0px 0px 100% 100% round 20px)'};
  transform: ${props =>
    props.showDropdown ? 'translateY(0)' : 'translateY(20px)'};
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1),
    clip-path 0.5s cubic-bezier(0.2, 0.6, 0.35, 1);

  ul {
    overflow: hidden;

    li {
      height: 60px;
      padding: 0 24px;
      cursor: pointer;

      display: flex;
      justify-content: flex-start;

      opacity: ${props => (props.showDropdown ? 1 : 0)};
      transform: ${props =>
        props.showDropdown ? 'translateY(0)' : 'translateY(80px)'};
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);

      &:nth-child(1) {
        transition-delay: 0.2s;
      }

      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      &:nth-child(3) {
        transition-delay: 0.4s;
      }

      &:hover svg {
        color: #1db954;
      }

      button,
      a {
        width: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        background: transparent;
        border: 0;

        display: flex;
        align-items: center;

        svg {
          color: #fff;
          margin-right: 16px;
          transition: color 0.2s;
        }
      }
    }
  }
`;
