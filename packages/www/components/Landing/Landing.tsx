import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { activeTrees } from '../../shared/trees';
import Features from '../Features';
import Header from '../Header';
import Home from '../Home';
import Link from '../Link';
import Screenshots from '../Screenshots/Screenshots';
import TitleDivider from '../TitleDivider';
import Trees from '../Trees';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center'
  },
  section: {
    textAlign: 'center',
    margin: '0 auto',
    backgroundImage: 'linear-gradient(to top left, #151515, #0a0a0c)'
  },
  padding: {
    paddingTop: 40,
    paddingBottom: 40
  },
  maxWidth: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  trees: {
    backgroundImage: 'url(/static/backgrounds/dark-mosaic.png)'
  },
  screenshots: {
    backgroundImage: 'url(/static/backgrounds/cartographer.png)'
  }
}));

const demoProgresses = [
  [0, 1, 2, 4],
  [1, 2, 3],
  [0, 1, 2, 3, 4, 5, 6],
  [2],
  [1, 3],
  [0, 1, 2, 3, 5]
];
const demoTreeProgress = {};
Object.values(activeTrees).forEach((tree, index) => {
  const demoProgress = demoProgresses[index];
  const trophiesObtained = demoProgress.map(leafIndex => tree.leaves[leafIndex].trophyName);
  const progress = trophiesObtained.length / tree.leaves.length;
  demoTreeProgress[tree.name] = {
    trophiesObtained,
    progress
  };
});

const Landing: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header>
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="#features">
          <Button>Features</Button>
        </Link>
        <Link href="#trees">
          <Button>Trees</Button>
        </Link>
        <Link href="#screenshots">
          <Button>Screenshots</Button>
        </Link>
      </Header>
      <Home />
      <Features />
      <section className={classNames(classes.trees, classes.section)} id="trees">
        <div className={classes.padding}>
          <Typography variant="h3" color="default">
            Monthly Trees
          </Typography>
          <TitleDivider />
          <Trees treeProgress={demoTreeProgress} customTree="cassiopeia1" />
        </div>
      </section>
      <section
        className={classNames(classes.screenshots, classes.section, classes.padding)}
        id="screenshots"
      >
        <Typography variant="h3" color="default">
          Screenshots
        </Typography>
        <TitleDivider />
        <Screenshots />
      </section>
    </div>
  );
};

export default Landing;
