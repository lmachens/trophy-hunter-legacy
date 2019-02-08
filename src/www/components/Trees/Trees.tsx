import React, { FunctionComponent, useState } from 'react';

interface ITree {
  trophiesObtained: string[];
  progress: number;
}

interface ITreesProps {
  trees: {
    [treeName: string]: ITree;
  };
}

const Trees: FunctionComponent<ITreesProps> = ({ trees }) => {
  const [selectedTree, setSelectedTree] = useState('');
  return <div />;
};

export default Trees;
