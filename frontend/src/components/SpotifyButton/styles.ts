import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.a`
  background: #1db954;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 32px 48px;
  border-radius: 10px;

  transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s,
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1) 1s, background 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    background: ${lighten(0.03, '#1db954')};
  }

  svg {
    margin-right: 16px;
  }
`;
