import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions } from '../../shared/riot-api/typings';

interface ILeaguePositionsProps {
  leaguePositions: ILeaguePositions;
}

const useStyles = makeStyles({
  leaguePositions: {
    display: 'flex'
  },
  leaguePosition: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imgContainer: {
    display: 'flex',
    height: 60,
    width: 70,
    alignItems: 'center'
  },
  leagueImage: {
    width: 60,
    margin: '0 auto'
  }
});

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
const provisional = {
  tier: 'provisional',
  rank: ''
};

const getLeagueImage = ({ tier, rank }) =>
  `/static/leagues/${tier.toLowerCase()}_${rank.toLowerCase()}.png`;

const LeaguePositions: FunctionComponent<ILeaguePositionsProps> = ({ leaguePositions }) => {
  const classes = useStyles();

  const sortedLeagues = leaguePositions.sort(
    (a, b) => leaguesOrdered.indexOf(a.tier) - leaguesOrdered.indexOf(b.tier)
  );
  const soloDuo =
    leaguePositions.find(league => league.queueType === 'RANKED_SOLO_5x5') || provisional;
  const flex5v5 =
    leaguePositions.find(league => league.queueType === 'RANKED_FLEX_SR') || provisional;
  const flex3v3 =
    leaguePositions.find(league => league.queueType === 'RANKED_FLEX_TT') || provisional;

  return (
    <div className={classes.leaguePositions}>
      <div className={classes.leaguePosition}>
        <div className={classes.imgContainer}>
          <img className={classes.leagueImage} src={getLeagueImage(soloDuo)} />
        </div>
        <Typography>Solo/Duo</Typography>
        <Typography color="secondary" noWrap>
          {soloDuo.tier.toUpperCase()}
          {soloDuo.rank && <span> {soloDuo.rank}</span>}
        </Typography>
      </div>
      <div className={classes.leaguePosition}>
        <div className={classes.imgContainer}>
          <img className={classes.leagueImage} src={getLeagueImage(flex5v5)} />
        </div>
        <Typography>Flex 5v5</Typography>
        <Typography color="secondary" noWrap>
          {flex5v5.tier.toUpperCase()}
          {flex5v5.rank && <span> {flex5v5.rank}</span>}
        </Typography>
      </div>
      <div className={classes.leaguePosition}>
        <div className={classes.imgContainer}>
          <img className={classes.leagueImage} src={getLeagueImage(flex3v3)} />
        </div>
        <Typography>Flex 3v3</Typography>
        <Typography color="secondary" noWrap>
          {flex3v3.tier.toUpperCase()}
          {flex3v3.rank && <span> {flex3v3.rank}</span>}
        </Typography>
      </div>
    </div>
  );
};

export default LeaguePositions;
