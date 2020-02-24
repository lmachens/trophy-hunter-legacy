import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent, useState } from 'react';
import trees, { activeTrees } from '../../shared/trees';
import Tree from '../Tree';
import TreeTrophy from '../TreeTrophy';

interface ITree {
  trophiesObtained: string[];
  progress: number;
}

interface ITreesProps {
  treeProgress?: {
    [treeName: string]: ITree;
  };
  customTree?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zoom: 0.45,
    [theme.breakpoints.up('sm')]: {
      zoom: 0.75
    },
    [theme.breakpoints.up('md')]: {
      zoom: 1
    }
  },
  container: {
    position: 'relative',
    display: 'flex'
  }
}));

const Trees: FunctionComponent<ITreesProps> = ({ treeProgress, customTree = 'placeholder' }) => {
  const classes = useStyles();
  const [selectedTree, setSelectedTree] = useState(Object.values(activeTrees)[0]);

  const handleTreeClick = tree => () => {
    if (tree.name !== 'placeholder') {
      setSelectedTree(tree);
    }
  };

  const allTreeNames = [...Object.keys(activeTrees), customTree];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {allTreeNames.map(treeName => {
          const tree = trees[treeName];
          const progress =
            (treeProgress && treeProgress[tree.name] && treeProgress[tree.name].progress) || 0;
          const isSelectedTree = selectedTree.name === tree.name;

          return (
            <TreeTrophy
              inactive={!isSelectedTree}
              key={tree.name}
              onClick={handleTreeClick(tree)}
              progress={progress}
              tree={tree}
            />
          );
        })}
      </div>
      <Tree tree={selectedTree} treeProgress={treeProgress} />
    </div>
  );
};

export default Trees;
