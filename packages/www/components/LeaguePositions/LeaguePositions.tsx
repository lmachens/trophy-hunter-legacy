import { Grid, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions } from '../../shared/riot-api/typings';

interface ILeaguePositionsProps {
  leaguePositions: ILeaguePositions;
  trophyHunter: any;
}

const useStyles = makeStyles({
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
  thImage: {
    height: 50,
    margin: '0 auto'
  },
  leagueImage: {
    width: 60,
    margin: '0 auto'
  }
});

const provisional = {
  tier: 'provisional',
  rank: ''
};

const getLeagueImage = ({ tier, rank }) =>
  `/static/leagues/${tier.toLowerCase()}_${rank.toLowerCase()}.png`;

const getTooltip = league => `${league.wins || 0}W ${league.losses || 0}L`;

const LeaguePositions: FunctionComponent<ILeaguePositionsProps> = ({
  leaguePositions,
  trophyHunter
}) => {
  const classes = useStyles();

  const seasonRank = trophyHunter ? trophyHunter.s9Rank : 0;
  const { wins = 0, games = 0 } = trophyHunter ? trophyHunter.features : {};
  const soloDuo =
    leaguePositions.find(league => league.queueType === 'RANKED_SOLO_5x5') || provisional;
  const flex5v5 =
    leaguePositions.find(league => league.queueType === 'RANKED_FLEX_SR') || provisional;
  const flex3v3 =
    leaguePositions.find(league => league.queueType === 'RANKED_FLEX_TT') || provisional;

  return (
    <Grid container>
      <Tooltip title={`${wins}W ${games - wins}L`}>
        <div className={classes.leaguePosition}>
          <div className={classes.imgContainer}>
            <img
              className={classes.thImage}
              src={seasonRank ? '/static/icon.png' : '/static/icon_gray.png'}
            />
          </div>
          <Typography>Trophy Hunter</Typography>
          <Typography color="secondary" noWrap>
            {seasonRank ? `${seasonRank}. Rank` : 'Unranked'}
          </Typography>
        </div>
      </Tooltip>
      <Tooltip title={getTooltip(soloDuo)}>
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
      </Tooltip>
      <Tooltip title={getTooltip(flex5v5)}>
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
      </Tooltip>
      <Tooltip title={getTooltip(flex3v3)}>
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
      </Tooltip>
    </Grid>
  );
};

export default LeaguePositions;
