import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import DownloadButton from '../DownloadButton';
import Parallax from '../Parallax';
import SummonerSearch from '../SummonerSearch';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: 110,
    maxWidth: 1000,
    padding: 10
  },
  image: {
    maxWidth: '90vw',
    userSelect: 'none'
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

  return (
    <Parallax filter image={'/static/bg.jpg'}>
      <div className={classes.container}>
        <img src="/static/logo.png" className={classes.image} />
        <SummonerSearch className={classes.summonerSearch} />
        <DownloadButton />
      </div>
      <a href="#features" className={classes.more}>
        <IconButton aria-label="More">
          <KeyboardArrowDownIcon />
        </IconButton>
      </a>
    </Parallax>
  );
};

export default Home;
