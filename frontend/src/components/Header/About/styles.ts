import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import {
  aboutDropdown,
  aboutDropdownMobile,
  incresedFadeUp,
} from '../../../styles/animations';

interface IAboutProps {
  showAbout: boolean;
}

export const Container = styled.div<IAboutProps>`
  background: #19191a;
  padding: 40px;
  width: 636px;
  box-shadow: 2px 2px 16px #000;
  z-index: 100;
  overflow: hidden;

  position: absolute;
  left: 0px;
  top: 54px;

  visibility: hidden;
  ${props =>
    props.showAbout &&
    css`
      animation: ${aboutDropdown} 0.8s forwards cubic-bezier(0.19, 0.8, 0.28, 1);
    `}

  section {
    display: flex;
    flex-direction: column;

    & + section {
      margin-top: 24px;
    }

    h1 {
      color: #fff;
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 16px;

      ${props =>
        props.showAbout &&
        css`
          opacity: 0;
          animation: ${incresedFadeUp} 1.2s forwards
            cubic-bezier(0.19, 1, 0.22, 1);
          animation-delay: 0.1s;
        `}
    }

    h3 {
      color: #7a8185;
      text-transform: uppercase;
      font-size: 16px;
      margin-bottom: 12px;

      &.privacy-title {
        animation-delay: 0.3s;
      }

      &.we-title {
        animation-delay: 0.5s;
      }

      ${props =>
        props.showAbout &&
        css`
          opacity: 0;
          animation: ${incresedFadeUp} 1.2s forwards
            cubic-bezier(0.19, 1, 0.22, 1);
        `}
    }

    p {
      font-size: 18px;
      color: #fff;
      line-height: 1.8;

      ${props =>
        props.showAbout &&
        css`
          opacity: 0;
          animation: ${incresedFadeUp} 1.2s forwards
            cubic-bezier(0.19, 1, 0.22, 1);
        `}

      &.about-text {
        animation-delay: 0.2s;
      }

      &.privacy-text {
        animation-delay: 0.4s;
      }

      a {
        margin: 0 4px;
        color: #1db954;
        transition: color 0.2s;

        &:hover {
          color: ${lighten(0.12, '#1db954')};
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 32px;

    right: 0;
    left: auto;

    ${props =>
      props.showAbout &&
      css`
        animation: ${aboutDropdownMobile} 0.8s forwards
          cubic-bezier(0.19, 0.8, 0.28, 1);
      `}

    section {
      h1 {
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 12px;
      }

      h3 {
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 92vw;
  }
`;

export const Devs = styled.div<IAboutProps>`
  display: flex;

  ${props =>
    props.showAbout &&
    css`
      opacity: 0;
      animation: ${incresedFadeUp} 1.2s forwards cubic-bezier(0.19, 1, 0.22, 1);
    `}

  animation-delay: 0.6s;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Dev = styled.div`
  background: #2d2f30;
  border-radius: 20px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-left: 32px;
  }

  img {
    width: 80px;
    height: 80px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media (max-width: 992px) {
    & + div {
      margin-top: 24px;
      margin-left: 0;
    }

    img {
      width: 64px;
      height: 64px;
    }
  }
`;

export const DevInfo = styled.aside`
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  strong {
    color: #fff;
    font-size: 16px;
    margin-bottom: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      & + a {
        margin-left: 12px;
      }

      &:nth-child(1):hover svg {
        color: #ccc;
      }

      &:nth-child(2):hover svg {
        color: #0e76a8;
      }

      svg {
        color: #fff;
        width: 23px;
        height: 23px;
        transition: color 0.2s;
      }
    }
  }

  @media (max-width: 992px) {
    strong {
      margin-bottom: 6px;
    }

    div {
      a {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
