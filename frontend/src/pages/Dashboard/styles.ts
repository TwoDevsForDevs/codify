import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const Content = styled.main`
  width: 100%;
  background-image: linear-gradient(to bottom, #414141 -8%, #181818 20%);
  background-repeat: no-repeat;

  height: 100%;
  overflow-y: scroll;
  transform: translateZ(0);
`;

export const Profile = styled.div`
  padding: 0 32px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const UserData = styled.div`
  margin-left: 24px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  div {
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 12px;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 48px;
    }
  }

  button {
    background: #181818;
    border: 1px solid #b3b3b3;
    border-radius: 50%;
    padding: 4px;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: #fff;
      padding: 6px;
    }
  }
`;

export const Nav = styled.nav`
  padding: 0 32px;
  margin-bottom: 32px;

  strong {
    letter-spacing: 2px;
    font-size: 14px;
    position: relative;

    transition: color 0.2s;

    &:first-child {
      color: #fff;

      &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 40px;
        height: 2px;
        width: 40px;
        background: #1eb954;
      }
    }

    & + strong {
      margin-left: 16px;
    }

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Playlists = styled.div`
  padding: 0 32px;

  & + div {
    margin-top: 24px;
  }

  section {
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;

      margin-bottom: 16px;

      strong {
        color: #fff;
        font-size: 16px;
      }

      span {
        font-size: 12px;
        font-weight: bold;
      }

      strong,
      span {
        &:hover {
          cursor: pointer;
        }
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      height: 270px;
      width: 210px;

      padding: 20px 16px;
      background: #282828;
      border-radius: 8px;
    }
  }
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 170px;
    width: 170px;
    margin-bottom: 24px;

    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  strong {
    color: #fff;
    margin-bottom: 8px;
  }

  span {
    font-size: 10px;
  }
`;
