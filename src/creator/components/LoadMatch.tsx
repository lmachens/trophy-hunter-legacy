import React from 'react';
import { getMatchWithTimeline } from '../shared/th-api';

const LoadMatch = ({ onLoad }) => {
  const handleClick = () => {
    getMatchWithTimeline({ platformId: 'euw1', matchId: 3795861223 }).then(onLoad);
  };

  return <button onClick={handleClick}>Load</button>;
};

export default LoadMatch;
