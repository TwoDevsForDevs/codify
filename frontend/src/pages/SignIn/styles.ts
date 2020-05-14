import styled from "styled-components";

import background from "../../assets/background.svg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  div {
    width: 360px;

    h2 {
      line-height: 32px;
      font-size: 24px;
      margin-bottom: 24px;

      display: flex;
      flex-direction: column;
    }

    > div {
      strong {
        margin-bottom: 16px;
        display: block;
        font-size: 18px;
      }

      a {
        height: 40px;
        border-radius: 20px;
        padding: 0 16px;
        font-weight: bold;
        transition: all 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        & + a {
          margin-top: 16px;
        }
      }

      .sign-in {
        background: #1eb954;
        color: #fff;

        &:hover {
          background: #1ed75f;
        }
      }

      .sign-up {
        background: transparent;
        border: 1px solid #1eb954;
        color: #1eb954;

        &:hover {
          border-color: #1ed75f;
          background: #1ed75f;
          color: #fff;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;

  div {
    height: 100%;
    cursor: default;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1120px) {
      display: none;
    }

    ul {
      color: #fff;
      font-size: 20px;
      font-weight: 500;

      display: flex;
      flex-direction: column;

      li {
        display: flex;
        align-items: center;
        transition: opacity 0.2s;

        & + li {
          margin-top: 24px;
        }

        &:hover {
          opacity: 0.7;
        }

        svg {
          margin-right: 16px;
        }
      }
    }
  }
`;
