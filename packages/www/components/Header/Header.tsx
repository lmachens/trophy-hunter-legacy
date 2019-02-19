import { AppBar, Hidden, IconButton, Toolbar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Discord from '../../icons/Discord';
import GitHub from '../../icons/GitHub';
import Twitter from '../../icons/Twitter';
import DownloadButton from '../DownloadButton';
import Link from '../Link';
import SummonerSearch from '../SummonerSearch';

const useStyles = makeStyles({
  appBar: {
    backgroundImage: 'url(/static/backgrounds/gun-metal.png)'
  },
  logo: {
    width: 170,
    height: 40,
    verticalAlign: 'middle',
    pointerEvents: 'none'
  },
  grow: {
    flex: 1
  },
  download: {
    marginRight: 20
  },
  summonerSearch: {
    width: 'auto',
    background: '#161416'
  },
  summonerSearchIconButton: {
    padding: 0
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link href="/">
          <img className={classes.logo} src="/static/text.png" />
        </Link>
        <div className={classes.grow} />
        <Hidden xsDown implementation="css">
          <DownloadButton className={classes.download} variant="outlined" />
        </Hidden>
        <Hidden smDown implementation="css">
          <SummonerSearch
            className={classes.summonerSearch}
            iconButtonClassName={classes.summonerSearchIconButton}
          />
        </Hidden>
        <Tooltip title="GitHub">
          <IconButton href="https://github.com/lmachens/trophy-hunter" target="_blank">
            <GitHub />
          </IconButton>
        </Tooltip>
        <Tooltip title="Discord">
          <IconButton color="inherit" href="https://discord.gg/6aYTkbA" target="_blank">
            <Discord />
          </IconButton>
        </Tooltip>
        <Tooltip title="Twitter">
          <IconButton color="inherit" href="https://twitter.com/LolTrophyHunter" target="_blank">
            <Twitter />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
