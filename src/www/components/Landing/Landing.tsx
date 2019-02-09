import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { activeTrees } from '../../shared/trees';
import DownloadButton from '../DownloadButton';
import Features from '../Features';
import Header from '../Header';
import Home from '../Home';
import Link from '../Link';
import Parallax from '../Parallax';
import Screenshots from '../Screenshots/Screenshots';
import TitleDivider from '../TitleDivider';
import Trees from '../Trees';
import Trophies from '../Trophies';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center'
  },
  hidden: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
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
  alternative: {
    backgroundImage: 'linear-gradient(to bottom right, #151515, #0a0a0c)'
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

const Landing = () => {
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
        <Link href="#trophies">
          <Button>Trophies</Button>
        </Link>
        <Link href="#screenshots" className={classes.hidden}>
          <Button>Screenshots</Button>
        </Link>
      </Header>
      <Home />
      <Features />
      <section className={classes.section} id="trees">
        <Parallax
          small="/static/bg2_small.jpg"
          big="/static/bg2_big.jpg"
          backgroundPosition="center 80px"
        >
          <div className={classes.padding}>
            <Typography variant="h3" color="default">
              Monthly Trees
            </Typography>
            <TitleDivider />
            <Trees treeProgress={demoTreeProgress} customTree="cassiopeia1" />
          </div>
        </Parallax>
      </section>
      <section
        className={classNames(classes.section, classes.padding, classes.alternative)}
        id="trophies"
      >
        <div className={classes.maxWidth}>
          <Typography variant="h3" color="default">
            Trophies
          </Typography>
          <TitleDivider />
          <Trophies />
        </div>
        <DownloadButton />
      </section>
      <section className={classNames(classes.section, classes.padding)} id="screenshots">
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
