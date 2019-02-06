import { IconButton, Link, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import DownloadButton from '../DownloadButton';
import Parallax from '../Parallax';
// import SummonerSearch from '../SummonerSearch';

const useStyles = makeStyles({
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
    marginBottom: 10
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
  },
  community: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '@media (min-width: 960px)': {
      flexDirection: 'row',
      width: 180
    }
  },
  communityImage: {
    height: 40
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <section id="home">
      <Parallax>
        <div className={classes.container}>
          <img src="/static/logo.png" className={classes.image} />
          {/* <SummonerSearch className={classes.summonerSearch} /> */}
          <DownloadButton />
        </div>
        <a href="#features" className={classes.more}>
          <IconButton aria-label="More">
            <KeyboardArrowDownIcon />
          </IconButton>
        </a>
        <div className={classes.community}>
          <Link href="https://github.com/lmachens/trophy-hunter" target="_blank">
            <img src="/static/github.png" className={classes.communityImage} />
            <Typography>GitHub</Typography>
          </Link>

          <Link href="https://discord.gg/6aYTkbA" target="_blank">
            <img src="/static/discord.png" className={classes.communityImage} />
            <Typography>Discord</Typography>
          </Link>

          <Link href="https://twitter.com/LolTrophyHunter" target="_blank">
            <img src="/static/twitter.png" className={classes.communityImage} />
            <Typography>Twitter</Typography>
          </Link>
        </div>
      </Parallax>
    </section>
  );
};

export default Home;
