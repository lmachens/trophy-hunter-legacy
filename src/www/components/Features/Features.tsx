import { Card, CardContent, Divider, Grid, Link, Typography } from '@material-ui/core';
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
  list: {
    textAlign: 'left'
  },
  feature: {
    height: 200,
    backgroundColor: 'transparent'
  }
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="features">
      <Typography variant="h2" className={classes.subtitle}>
        Features
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={16}>
        <Grid item xs>
          <Card className={classes.feature}>
            <CardContent>
              <Typography variant="h4">Rich Stats</Typography>
              <Divider className={classes.divider} />
              <Typography component="ul" className={classes.list}>
                <li>Win Rate</li>
                <li>KDA</li>
                <li>Accuracy</li>
                <li>Matchup</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.feature}>
            <CardContent>
              <Typography variant="h4">Guides</Typography>
              <Divider className={classes.divider} />
              <Typography component="ul" className={classes.list}>
                <li>Build guides</li>
                <li>Skill order</li>
                <li>Item sets</li>
                <li>Playstyle</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.feature}>
            <CardContent>
              <Typography variant="h4">Rewards</Typography>
              <Divider className={classes.divider} />
              <Typography component="ul" className={classes.list}>
                <li>Over 200 trophies</li>
                <li>More competition</li>
                <li>More fun</li>
                <li>
                  <b>Win RP</b> for trophy points
                </li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.feature}>
            <CardContent>
              <Typography variant="h4">How it works</Typography>
              <Divider className={classes.divider} />
              <Typography component="ul" className={classes.list}>
                <li>
                  <Link
                    href="https://download.overwolf.com/install/Download?Channel=website2&PartnerId=3399"
                    target="_blank"
                  >
                    <b>Install</b> Trophy Hunter
                  </Link>
                </li>
                <li>
                  <b>Play</b> League of Legends
                </li>
                <li>
                  <b>Pull</b> up the app in game
                </li>
                <li>
                  <b>Dominate</b>
                </li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
