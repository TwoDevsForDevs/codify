import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  div[role='button'] {
    width: 220px !important;
    height: 220px !important;
    margin: 0 !important;
  }

  h1 {
    font-size: 72px;
    color: #fff;
    line-height: 1.25;
    margin: 32px 0;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #7a8185;
    margin-bottom: 32px;
    line-height: 1.5;
  }

  @media (max-width: 992px) {
    div[role='button'] {
      width: 150px !important;
      height: 150px !important;
    }

    h1 {
      font-size: 52px;
      margin: 24px 0;
    }

    p {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
`;
