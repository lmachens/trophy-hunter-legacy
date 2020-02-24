import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import DownloadButton from '../DownloadButton';
import Parallax from '../Parallax';
import SummonerSearch from '../SummonerSearch';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 56px)',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      height: 'calc(100vh - 48px)',
      minHeight: 48
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)'
    }
  },
  container: {
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: 110,
    maxWidth: 1000,
    padding: 10
  },
  image: {
    maxWidth: '90vw',
    userSelect: 'none',
    marginBottom: 10,
    pointerEvents: 'none'
  },
  summonerSearch: {
    margin: '10px 0'
  },
  more: {
    position: 'absolute',
    bottom: 0,
    animation: '$floating-arrow 2s ease-in-out infinite'
  },
  '@keyframes floating-arrow': {
    '0%, 100%': {
      transform: 'translate(0, 0)'
    },
    '65%': {
      transform: 'translate(0, -15px)'
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  const handleMoreClick = () => {
    window.scrollTo({ top: window.innerHeight - 50, left: 0, behavior: 'smooth' });
  };
  return (
    <section id="home" className={classes.root}>
      <Parallax small="/static/bg_small.jpg" big="/static/bg_big.jpg">
        <div className={classes.container}>
          <img src="/static/logo.png" className={classes.image} />
          <SummonerSearch className={classes.summonerSearch} autoFocus />
          <DownloadButton variant="outlined" />
        </div>
        <IconButton className={classes.more} onClick={handleMoreClick} aria-label="More">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Parallax>
    </section>
  );
};

export default Home;
