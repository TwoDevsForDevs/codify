import styled from "styled-components";

interface IPlayListProps {
  height: number;
}

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 20px 0 20px 10px;
  min-width: 250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  /* padding: 10px 15px; */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px 0 15px;

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

  padding: 0 15px;
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

export const Playlist = styled.div<IPlayListProps>`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: normal;
    font-size: 11px;
    margin-bottom: 16px;
    padding: 0 15px;
  }

  div {
    padding: 0 15px;

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

  hr {
    margin: 15px 25px 0 15px;
    background-color: #282828;
    border: none;
    height: 1px;
  }

  ul {
    margin-top: 16px;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    list-style: none;
    transform: translateZ(0);
    padding-left: 15px;
    padding-right: 15px;
    height: ${props => `${props.height - 400}px`};

    li {
      font-size: 14px;
      font-weight: 500;

      &:hover {
        cursor: default;
        color: #fff;
      }

      & + li {
        margin-top: 16px;
      }
    }
  }
`;
