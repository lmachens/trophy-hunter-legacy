import { Typography } from '@material-ui/core';
import Count from 'countup.js';
import React, { FunctionComponent, useEffect, useRef } from 'react';

interface CountUpProps {
  className?: string;
  end: number;
}

const CountUp: FunctionComponent<CountUpProps> = ({ className, end }) => {
  const containerRef = useRef(null);
  const countInstance = useRef(null);

  useEffect(() => {
    countInstance.current = new Count(containerRef.current, 0, end);
    countInstance.current.start();
    return () => {};
  }, []);

  return (
    <Typography inline className={className}>
      <span ref={containerRef} />
    </Typography>
  );
};

export default CountUp;
