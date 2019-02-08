import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions, ISummoner } from '../../shared/riot-api/typings';
import SummonerInfo from '../SummonerInfo';
import Trees from '../Trees';

interface ISummonerProps {
  summoner: ISummoner;
  region: string;
  summonerName: string;
  leaguePositions: ILeaguePositions;
  trophyHunter: any;
}

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    padding: 20,
    margin: '0 auto'
  }
});

const Summoner: FunctionComponent<ISummonerProps> = ({
  region,
  summoner,
  leaguePositions,
  trophyHunter
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SummonerInfo region={region} leaguePositions={leaguePositions} {...summoner} />
      <Trees trees={trophyHunter && trophyHunter.trees} />
    </div>
  );
};

export default Summoner;
