import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 64px;
`;

export const Content = styled.div`
  padding: 8px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 14px;
    }

    span {
      font-size: 14px;
      color: #fff;
      margin: 0 12px 0 4px;
    }
  }
`;
