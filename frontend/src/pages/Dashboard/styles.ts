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
`;

export const Profile = styled.div`
  padding: 0 32px;
  margin-top: 16px;
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
    /* margin-top: 16px; */

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
