import { Divider, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: 1000,
    padding: 10
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
  communityImage: {
    height: 140
  }
}));

const Community = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="community">
      <Typography variant="h2" className={classes.subtitle}>
        Community
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={16}>
        <Grid item xs>
          <Link href="https://github.com/lmachens/trophy-hunter" target="_blank">
            <img src="/static/github.png" className={classes.communityImage} />
            <Typography>GitHub</Typography>
          </Link>
        </Grid>
        <Grid item xs>
          <Link href="https://discord.gg/6aYTkbA" target="_blank">
            <img src="/static/discord.png" className={classes.communityImage} />
            <Typography>Discord</Typography>
          </Link>
        </Grid>
        <Grid item xs>
          <Link href="https://twitter.com/LolTrophyHunter" target="_blank">
            <img src="/static/twitter.png" className={classes.communityImage} />
            <Typography>Twitter</Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Community;
