import React from 'react';
import { getMatchWithTimeline } from '../shared/th-api';

const LoadMatch = ({ onLoad, platformId, matchId }) => {
  const handleClick = () => {
    getMatchWithTimeline({ platformId, matchId }).then(onLoad);
  };

  return <button onClick={handleClick}>Load</button>;
};

export default LoadMatch;
