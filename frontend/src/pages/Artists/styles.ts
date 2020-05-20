import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 80px;
    margin-right: 152px;
  }
`;

export const TopArtists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Artist = styled.div`
  position: relative;
  margin: 0 0 32px 32px;
  overflow: hidden;

  img {
    width: 250px;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  div {
    background: #272727;
    padding: 16px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    bottom: 0px;

    h3 {
      font-size: 16px;
    }
  }
`;
