import React from 'react';

import { Container } from './styles';

interface ISpinnerProps {
  width?: number;
  height?: number;
}

const Spinner: React.FC<ISpinnerProps> = ({ width = 60, height = 60 }) => {
  return (
    <Container style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="sk-circle1 sk-child" />
      <div className="sk-circle2 sk-child" />
      <div className="sk-circle3 sk-child" />
      <div className="sk-circle4 sk-child" />
      <div className="sk-circle5 sk-child" />
      <div className="sk-circle6 sk-child" />
      <div className="sk-circle7 sk-child" />
      <div className="sk-circle8 sk-child" />
      <div className="sk-circle9 sk-child" />
      <div className="sk-circle10 sk-child" />
      <div className="sk-circle11 sk-child" />
      <div className="sk-circle12 sk-child" />
    </Container>
  );
};

export default Spinner;
