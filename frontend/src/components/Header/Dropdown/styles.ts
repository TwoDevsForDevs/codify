import styled from "styled-components";

interface IDropdownMenuProps {
  showDropdown: boolean;
}

export const Container = styled.div<IDropdownMenuProps>`
  background: #19191a;
  padding: 8px 0;
  border-radius: 10px;
  width: 325px;
  z-index: 100;
  position: absolute;
  right: 0px;
  top: 54px;

  opacity: ${props => (props.showDropdown ? 1 : 0)};
  visibility: ${props => (props.showDropdown ? "visible" : "hidden")};
  transform: ${props =>
    props.showDropdown ? "translateY(0)" : "translateY(40px)"};
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);

  ul {
    li {
      height: 60px;
      padding: 0 24px;
      overflow: hidden;

      display: flex;
      justify-content: flex-start;

      opacity: ${props => (props.showDropdown ? 1 : 0)};
      transform: ${props =>
        props.showDropdown ? "translateY(0)" : "translateY(40px)"};
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);

      &:nth-child(1) {
        transition-delay: 0.2s;
      }

      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      button {
        color: #fff;
        font-size: 18px;
        font-weight: 500;

        display: flex;
        align-items: center;

        svg {
          margin-right: 16px;
        }
      }
    }
  }
`;
