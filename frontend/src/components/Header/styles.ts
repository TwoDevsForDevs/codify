import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 32px;
  margin-bottom: 80px;

  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      margin-left: 32px;
      color: #fff;
      font-weight: bold;
      position: relative;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    .selected::after {
      content: "";
      width: 100%;
      height: 3px;
      background: #1db954;
      position: absolute;
      bottom: -16px;
      left: 0;
    }
  }
`;

interface IProfileDataProps {
  showDropdown: boolean;
}

export const ProfileData = styled.aside<IProfileDataProps>`
  position: relative;

  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  span {
    color: #fff;
    font-weight: bold;
    margin: 0 16px;
  }

  > button {
    background: ${props =>
      props.showDropdown ? "rgba(51, 255, 122, 0.15)" : "transparent"};
    border: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${props => (props.showDropdown ? "#33ff7a" : "#fff")};
    }
  }
`;
