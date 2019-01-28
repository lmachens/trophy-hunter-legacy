import { Card, CardContent, Divider, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import DownloadButton from '../DownloadButton';
import Parallax from '../Parallax';
import SummonerSearch from '../SummonerSearch';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: 110,
    maxWidth: 1000
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
  },
  subtitle: {
    marginTop: 40
  },
  divider: {
    width: 200,
    maxWidth: '100%',
    margin: '20px auto',
    borderTop: '2px solid',
    color: theme.palette.secondary.main
  },
  list: {
    textAlign: 'left'
  },
  feature: {
    height: 300,
    backgroundColor: 'transparent'
  },
  richStats: {}
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <>
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
      <div className={classes.container} id="features">
        <Typography variant="h2" className={classes.subtitle}>
          Features
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <Card className={classes.feature}>
              <CardContent>
                <Typography variant="h4">Rich Stats</Typography>
                <Divider className={classes.divider} />
                <Typography component="ul" className={classes.list}>
                  <li>Win Rate</li>
                  <li>KDA</li>
                  <li>Accuracy</li>
                  <li>And More</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.feature}>
              <CardContent>
                <Typography variant="h4">Overlay</Typography>
                <Divider className={classes.divider} />
                <Typography component="ul" className={classes.list}>
                  <li>Win Rate</li>
                  <li>KDA</li>
                  <li>Accuracy</li>
                  <li>And More</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.feature}>
              <CardContent>
                <Typography variant="h4">Rewards</Typography>
                <Divider className={classes.divider} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.feature}>
              <CardContent>
                <Typography variant="h4">Open Source</Typography>
                <Divider className={classes.divider} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className={classes.container} id="community">
        <Typography variant="h2" className={classes.subtitle}>
          Community
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <Typography variant="h4">{315}</Typography>
            <Typography>Online</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">{561464}</Typography>
            <Typography>Games Played</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">{56464}</Typography>
            <Typography>Installs</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Landing;
