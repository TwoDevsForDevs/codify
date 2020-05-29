import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 640px;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9999;
  background: rgb(25, 25, 25);
  border-radius: 16px;
  padding: 56px 56px 0;

  display: flex;
  align-items: flex-start;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Info = styled.aside`
  padding-bottom: 56px;
  margin-right: 104px;

  position: sticky;
  top: 20px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  a {
    width: 100%;

    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    color: #fff;
  }
`;

export const TracksList = styled.section`
  margin-top: 32px;
  padding-bottom: 56px;

  display: flex;
  flex-direction: column;
`;

export const Track = styled.div`
  background: #252527;
  padding: 0 24px;
  border-radius: 10px;
  height: 80px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  img {
    width: 80px;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }

    span {
      margin-top: 8px;
      font-size: 14px;
    }
  }

  aside {
    margin-left: auto;

    a + a {
      margin-left: 16px;
    }
  }
`;

export const CloseModal = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 24px;
  top: 24px;
  transition: transform 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.3);
  }

  svg {
    color: #f7415f;
    font-size: 24px;
  }
`;
