import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;
  min-width: 250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  h1 {
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;

  a {
    color: #b3b3b3;
    font-size: 14px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      color: #fff;
    }

    span {
      margin-left: 14px;
      font-weight: 500;
    }
  }
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: normal;
    font-size: 11px;
    margin-bottom: 16px;
  }

  div {
    & + div {
      margin-top: 16px;
    }

    button {
      width: 100%;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;

      &:hover {
        svg {
          opacity: 1;
        }

        span {
          color: #fff;
        }
      }

      svg {
        height: 32px;
        width: 32px;
        background: #fff;
        fill: #000;
        padding: 4px;
        margin-right: 16px;
        opacity: 0.7;

        transition: opacity 0.2s;

        &.favorite {
          background: linear-gradient(135deg, #450af5, #c4efd9);
          fill: #fff;
        }
      }

      span {
        font-weight: bold;
        font-size: 14px;
        color: #b3b3b3;

        transition: color 0.2s;
      }
    }
  }

  ul {
    margin-top: 16px;
    border-top: 1px solid #282828;
    padding: 16px 0;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    transform: translateZ(0);

    li {
      font-size: 14px;
      font-weight: 500;

      & + li {
        margin-top: 16px;
      }
    }
  }
`;
