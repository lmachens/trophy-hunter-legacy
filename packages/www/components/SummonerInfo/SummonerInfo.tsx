import { Avatar, Chip, Grid, Tooltip, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions, ISummoner } from '../../shared/riot-api/typings';
import version from '../../shared/riot-api/version';
import LeaguePositions from '../LeaguePositions';

interface ISummonerProps extends ISummoner {
  region: string;
  leaguePositions: ILeaguePositions;
  trophyHunter?: any;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  profileIcon: {
    border: '2px ridge #c4b998',
    margin: 10,
    width: 80,
    height: 80
  },
  grow: {
    flex: 1
  },
  adminBadge: {
    backgroundColor: '#963333'
  },
  patreonBadge: {
    backgroundColor: '#F96854'
  }
});

const getProfileIcon = profileIconId =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;

const SummonerInfo: FunctionComponent<ISummonerProps> = ({
  profileIconId,
  name,
  region,
  summonerLevel,
  trophyHunter,
  leaguePositions
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.container}>
        <Avatar className={classes.profileIcon} src={getProfileIcon(profileIconId)} />
        <div>
          <Typography color="primary">
            {name} ({region.toUpperCase()})
          </Typography>
          <Typography>Level {summonerLevel}</Typography>
          {trophyHunter && (
            <Typography>
              {trophyHunter.s9Rank ? `${trophyHunter.s9Rank}. Rank` : 'Unranked'} |{' '}
              {trophyHunter.features.wins || 0}W{' '}
              {trophyHunter.features.games - trophyHunter.features.wins || 0}L |{' '}
              {trophyHunter.trophiesObtained.length || 0} Trophies
            </Typography>
          )}
        </div>
      </Grid>
      <div className={classes.grow} />
      {trophyHunter && (
        <Grid item>
          {trophyHunter.items.admin && (
            <Tooltip title="This user is an admin">
              <Chip label="Admin" className={classes.adminBadge} />
            </Tooltip>
          )}
          {trophyHunter.items.patreon && trophyHunter.items.patreon.badge && (
            <Tooltip title="This user supports us via Patreon">
              <Chip label="Patron" className={classes.patreonBadge} />
            </Tooltip>
          )}
          <Chip
            avatar={
              <Avatar>
                <PeopleIcon />
              </Avatar>
            }
            label={`${
              trophyHunter.friends.length > 99 ? '99+' : trophyHunter.friends.length
            } Followers`}
          />
        </Grid>
      )}
      <Grid item>
        <LeaguePositions leaguePositions={leaguePositions} />
      </Grid>
    </Grid>
  );
};

export default SummonerInfo;
