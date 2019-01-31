import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import TitleDivider from '../TitleDivider';

const useStyles = makeStyles({
  titleDividerLeft: {
    marginRight: '0 !important'
  },
  titleDividerRight: {
    marginLeft: '0 !important'
  },
  quote: {
    direction: 'ltr',
    fontStyle: 'italic',
    marginTop: 30
  },
  list: {
    marginTop: 35
  },
  feature: {
    height: 300,
    backgroundRepeat: 'no-repeat',
    padding: 50
  },
  feature1: {
    backgroundImage: 'url(/static/draven.jpg)',
    backgroundColor: '#dbdee1',
    backgroundPosition: 'left bottom',
    backgroundSize: 'contain',
    textAlign: 'right',
    direction: 'rtl',
    '@media (max-width: 959px)': {
      backgroundPosition: 'left -110px bottom'
    }
  },
  feature2: {
    backgroundImage: 'url(/static/howling.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    textAlign: 'left'
  },
  feature3: {
    backgroundImage: 'url(/static/freljord.jpg)',
    backgroundSize: 'cover',
    textAlign: 'right',
    direction: 'rtl'
  },
  feature4: {
    backgroundImage: 'url(/static/garen.jpg)',
    backgroundColor: '#dbdee1',
    backgroundPosition: 'right -110px bottom',
    backgroundSize: 'contain',
    textAlign: 'left',
    '@media (min-width: 960px)': {
      backgroundPosition: 'right bottom'
    }
  }
});

const Features = () => {
  const classes = useStyles();

  return (
    <section id="features">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div className={classNames(classes.feature, classes.feature1)}>
            <Typography variant="h4" color="inherit">
              Rich Stats
            </Typography>
            <TitleDivider className={classes.titleDividerLeft} />
            <Typography color="inherit" className={classes.list}>
              <li>Win Rate</li>
              <li>KDA</li>
              <li>Accuracy</li>
              <li>Matchup</li>
            </Typography>
            <Typography color="inherit" variant="caption" className={classes.quote}>
              "Think what I could offer." - Cassiopeia
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classNames(classes.feature, classes.feature2)}>
            <Typography variant="h4">Guides</Typography>
            <TitleDivider className={classes.titleDividerRight} />
            <Typography className={classes.list}>
              <li>Build guides</li>
              <li>Skill order</li>
              <li>Item sets</li>
              <li>Playstyle</li>
            </Typography>
            <Typography variant="caption" className={classes.quote}>
              "The best meal is a herd of cattle, with dark beer, and cherries... Mmm..." - Ornn
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classNames(classes.feature, classes.feature3)}>
            <Typography variant="h4">Rewards</Typography>
            <TitleDivider className={classes.titleDividerLeft} />
            <Typography className={classes.list}>
              <li>Over 200 trophies</li>
              <li>More competition</li>
              <li>More fun</li>
              <li>
                <b>Win RP</b> for trophy points
              </li>
            </Typography>
            <Typography variant="caption" className={classes.quote}>
              "This is very exciting." - Orianna
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classNames(classes.feature, classes.feature4)}>
            <Typography variant="h4" color="inherit">
              How it works
            </Typography>
            <TitleDivider className={classes.titleDividerRight} />
            <Typography color="inherit" className={classes.list}>
              <li>
                <Link
                  color="secondary"
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
            <Typography color="inherit" variant="caption" className={classes.quote}>
              "A true hunter never rests." - Rengar
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Features;
