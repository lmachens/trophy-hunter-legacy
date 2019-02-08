import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions, ISummoner } from '../../shared/riot-api/typings';
import version from '../../shared/riot-api/version';
import LeaguePositions from '../LeaguePositions';

interface ISummonerProps extends ISummoner {
  region: string;
  leaguePositions: ILeaguePositions;
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
  }
});

const getProfileIcon = profileIconId =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;

const SummonerInfo: FunctionComponent<ISummonerProps> = ({
  profileIconId,
  name,
  region,
  summonerLevel,
  leaguePositions
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar className={classes.profileIcon} src={getProfileIcon(profileIconId)} />
      <div>
        <Typography>
          {name} ({region.toUpperCase()})
        </Typography>
        <Typography>Level {summonerLevel}</Typography>
      </div>
      <div className={classes.grow} />
      <LeaguePositions leaguePositions={leaguePositions} />
    </div>
  );
};

export default SummonerInfo;
