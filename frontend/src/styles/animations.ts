import { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeUp = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const incresedFadeUp = keyframes`
  from {
    transform: translateY(140px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale3d(3,3,3);
  }
  to {
    transform: scaleX(1);
  }
`;

const fadeScaleDown = keyframes`
  from {
    clip-path: inset(0px 100% 100% 0px round 10px);
    transform: scale3d(2.2, 2.2, 2.2);
    opacity: 0;
  }
  to {
    clip-path: inset(0px 0px 0px 0px round 10px);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
`;

const profileOptionsDropdown = keyframes`
  from {
    visibility: hidden;
    clip-path: inset(0px 0px 100% 100% round 20px);
    transform: translateY(20px);
  }
  to {
    visibility: visible;
    clip-path: inset(0px 0px 0px 0px round 20px);
    transform: translateY(0);
  }
`;

const profileOptionsDropdownMobile = keyframes`
  from {
    visibility: hidden;
    clip-path: inset(0px  100% 100% 0px round 20px);
    transform: translateY(20px);
  }
  to {
    visibility: visible;
    clip-path: inset(0px 0px 0px 0px round 20px);
    transform: translateY(0);
  }
`;

const aboutDropdown = keyframes`
  from {
    visibility: hidden;
    clip-path: inset(0px 100% 100% 0px round 20px);
    transform: translateY(20px);
  }
  to {
    visibility: visible;
    clip-path: inset(0px 0px 0px 0px round 20px);
    transform: translateY(0);
  }
`;

const aboutDropdownMobile = keyframes`
  from {
    visibility: hidden;
    clip-path: inset(0px 0px 100% 100% round 20px);
    transform: translateY(20px);
  }
  to {
    visibility: visible;
    clip-path: inset(0px 0px 0px 0px round 20px);
    transform: translateY(0);
  }
`;

export {
  fade,
  fadeUp,
  incresedFadeUp,
  fadeScaleDown,
  scaleDown,
  profileOptionsDropdown,
  profileOptionsDropdownMobile,
  aboutDropdown,
  aboutDropdownMobile,
};
