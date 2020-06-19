import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px 32px;

  display: flex;

  @media (max-width: 1220px) {
    padding: 0 16px 24px;

    justify-content: center;
    align-items: center;
  }
`;
