import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import trophies from '../../shared/trophies';
import TreeItem from '../TreeItem';

interface ITreeProps {
  tree: any;
  treeProgress: any;
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: 260,
    width: 660,
    margin: 20
  }
});

const isObtained = ({ treeProgress, tree, trophy }) => {
  if (!treeProgress) {
    return false;
  }
  const trophyHunterTree = treeProgress[tree.name];
  if (!trophyHunterTree) {
    return false;
  }
  // Is the tree level complete?
  if (tree.level < trophyHunterTree.level) {
    return true;
  }
  return (
    trophyHunterTree.trophiesObtained && trophyHunterTree.trophiesObtained.includes(trophy.name)
  );
};

const isReadyToObtain = ({ treeProgress, tree, parents, obtained }) => {
  if (!treeProgress) {
    return !parents.length && tree.level === 1;
  }

  if (obtained) {
    // allready obtained
    return false;
  }

  if (parents.length === 0) {
    return true;
  }
  const trophyHunterTree = treeProgress[tree.name];
  return (
    trophyHunterTree &&
    parents.every(
      parent =>
        trophyHunterTree.trophiesObtained &&
        trophyHunterTree.trophiesObtained.includes(parent.trophyName)
    )
  );
};

const Tree: FunctionComponent<ITreeProps> = ({ tree, treeProgress }) => {
  const classes = useStyles();
  const trophyNames = tree.leaves.map(trophy => {
    return trophy.trophyName;
  });
  const treeTrophies = trophyNames.map(trophyName => trophies[trophyName]);

  return (
    <div className={classes.container}>
      {tree.leaves.map(leaf => {
        const parents = leaf.parents.map(parent => {
          return tree.leaves.find(leaf => leaf.trophyName === parent);
        });

        const trophy = treeTrophies.find(treeTrophy => treeTrophy.name === leaf.trophyName);
        const obtained = isObtained({ treeProgress, tree, trophy });
        const readyToObtain = isReadyToObtain({ treeProgress, tree, obtained, parents });

        return (
          <TreeItem
            col={leaf.x}
            key={leaf.trophyName}
            parents={parents}
            row={leaf.y}
            tree={tree}
            trophy={trophy}
            treeProgress={treeProgress}
            obtained={obtained}
            readyToObtain={readyToObtain}
          />
        );
      })}
    </div>
  );
};

export default Tree;
