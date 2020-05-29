import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement>;

const LineGraphAnimated: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
      <div className="line4" />
    </Container>
  );
};

export default LineGraphAnimated;
