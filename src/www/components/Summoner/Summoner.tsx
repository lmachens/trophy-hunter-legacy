import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { ILeaguePositions, ISummoner } from '../../shared/riot-api/typings';
import SummonerInfo from '../SummonerInfo';

interface ISummonerProps {
  summoner: ISummoner;
  region: string;
  summonerName: string;
  leaguePositions: ILeaguePositions;
}

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    padding: 20,
    margin: '0 auto'
  }
});

const Summoner: FunctionComponent<ISummonerProps> = ({ region, summoner, leaguePositions }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SummonerInfo region={region} leaguePositions={leaguePositions} {...summoner} />
    </div>
  );
};

export default Summoner;
