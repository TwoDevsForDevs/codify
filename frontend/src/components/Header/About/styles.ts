import styled from 'styled-components';
import { lighten } from 'polished';

interface IAboutProps {
  showAbout: boolean;
}

export const Container = styled.div<IAboutProps>`
  background: #19191a;
  padding: 32px;
  width: 636px;
  box-shadow: 2px 2px 16px #000;
  z-index: 100;
  position: absolute;
  left: 0px;
  top: 54px;

  visibility: ${props => (props.showAbout ? 'visible' : 'hidden')};
  clip-path: ${props =>
    props.showAbout
      ? 'inset(0px 0px 0px 0px round 20px)'
      : 'inset(0px 100% 100% 0px round 20px)'};
  transform: ${props =>
    props.showAbout ? 'translateY(0)' : 'translateY(20px)'};
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1),
    clip-path 0.5s cubic-bezier(0.2, 0.6, 0.35, 1);

  h1 {
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: #fff;
    line-height: 1.8;

    a {
      margin: 0 4px;
      color: #1db954;

      &:hover {
        color: ${lighten(0.03, '#1db954')};
      }
    }
  }
`;

export const AboutApp = styled.div<IAboutProps>`
  display: flex;
  flex-direction: column;

  h3 {
    color: #7a8185;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 8px;

    opacity: ${props => (props.showAbout ? 1 : 0)};
    transform: ${props =>
      props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.2s;
  }

  p {
    color: #fff;
    font-size: 18px;

    opacity: ${props => (props.showAbout ? 1 : 0)};
    transform: ${props =>
      props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.3s;
  }
`;

export const Privacy = styled.div<IAboutProps>`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  h3 {
    color: #7a8185;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 8px;

    opacity: ${props => (props.showAbout ? 1 : 0)};
    transform: ${props =>
      props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.4s;
  }

  p {
    font-size: 18px;
    color: #fff;

    opacity: ${props => (props.showAbout ? 1 : 0)};
    transform: ${props =>
      props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.5s;
  }
`;

export const We = styled.div<IAboutProps>`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  h3 {
    color: #7a8185;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 8px;

    opacity: ${props => (props.showAbout ? 1 : 0)};
    transform: ${props =>
      props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.6s;
  }
`;

export const Devs = styled.div<IAboutProps>`
  display: flex;

  div:first-child {
    margin-right: 32px;
  }

  opacity: ${props => (props.showAbout ? 1 : 0)};
  transform: ${props =>
    props.showAbout ? 'translateY(0)' : 'translateY(40px)'};
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.7s;
`;

export const Dev = styled.div`
  background: #2d2f30;
  border-radius: 20px;
  width: 100%;

  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const DevInfo = styled.aside`
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  strong {
    color: #fff;
    font-size: 14px;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      & + a {
        margin-left: 8px;
      }

      &:hover svg:nth-child(1) {
        color: #ccc;
      }

      &:hover svg:nth-child(2) {
        color: #0e76a8;
      }

      svg {
        color: #fff;
        width: 25px;
        height: 25px;
        transition: color 0.2s;
      }
    }
  }
`;
