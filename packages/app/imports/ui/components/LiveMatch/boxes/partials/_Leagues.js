import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import classNames from 'classnames';
import { getLeagueImage } from '/imports/api/riot-api/staticData';

const leaguesOrdered = [
  'CHALLENGER',
  'MASTER',
  'DIAMOND',
  'PLATINUM',
  'GOLD',
  'SILVER',
  'BRONZE',
  'PROVISIONAL'
];

const styles = {
  leagueImgContainer: {
    display: 'inline-flex',
    height: 30,
    alignItems: 'center'
  },
  league: {
    width: 30,
    margin: '0 auto'
  },
  tooltipContainer: {
    display: 'flex'
  },
  tooltipLeague: {
    margin: 4
  },
  tooltipLeagueImage: {
    width: 60,
    margin: '0 auto'
  },
  imgContainer: {
    display: 'inline-flex',
    height: 60,
    width: 70,
    alignItems: 'center'
  }
};

const provisional = {
  tier: 'provisional',
  rank: ''
};

class Leagues extends PureComponent {
  render() {
    const { classes, className, leagues = [] } = this.props;

    const sortedLeagues = leagues.sort(
      (a, b) => leaguesOrdered.indexOf(a.tier) - leaguesOrdered.indexOf(b.tier)
    );
    const highestTier = (sortedLeagues && sortedLeagues[0]) || provisional;
    const soloDuo = leagues.find(league => league.queueType === 'RANKED_SOLO_5x5') || provisional;
    const flex5v5 = leagues.find(league => league.queueType === 'RANKED_FLEX_SR') || provisional;
    const flex3v3 = leagues.find(league => league.queueType === 'RANKED_FLEX_TT') || provisional;

    const tooltipContent = (
      <div className={classes.tooltipContainer}>
        <div className={classes.tooltipLeague}>
          <Typography>Solo/Duo</Typography>
          <Typography color="secondary" noWrap>
            {soloDuo.tier.toUpperCase()}
            {soloDuo.rank && <span> {soloDuo.rank}</span>}
          </Typography>
          <Typography color="secondary">{soloDuo.leaguePoints || 0} LP</Typography>
          <div className={classes.imgContainer}>
            <img className={classes.tooltipLeagueImage} src={getLeagueImage(soloDuo)} />
          </div>
        </div>
        <div className={classes.tooltipLeague}>
          <Typography>Flex 5v5</Typography>
          <Typography color="secondary" noWrap>
            {flex5v5.tier.toUpperCase()}
            {flex5v5.rank && <span> {flex5v5.rank}</span>}
          </Typography>
          <Typography color="secondary">{flex5v5.leaguePoints || 0} LP</Typography>
          <div className={classes.imgContainer}>
            <img className={classes.tooltipLeagueImage} src={getLeagueImage(flex5v5)} />
          </div>
        </div>
        <div className={classes.tooltipLeague}>
          <Typography>Flex 3v3</Typography>
          <Typography color="secondary" noWrap>
            {flex3v3.tier.toUpperCase()}
            {flex3v3.rank && <span> {flex3v3.rank}</span>}
          </Typography>
          <Typography color="secondary">{flex3v3.leaguePoints || 0} LP</Typography>
          <div className={classes.imgContainer}>
            <img className={classes.tooltipLeagueImage} src={getLeagueImage(flex3v3)} />
          </div>
        </div>
      </div>
    );

    return (
      <div className={classNames(classes.leagueImgContainer, className)}>
        <Tooltip title={<TooltipTitle content={tooltipContent} title="Leagues" />}>
          <img className={classes.league} src={getLeagueImage(highestTier)} />
        </Tooltip>
      </div>
    );
  }
}

Leagues.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  leagues: PropTypes.array.isRequired
};

const enhanced = withStyles(styles)(Leagues);
export { enhanced as Leagues };
