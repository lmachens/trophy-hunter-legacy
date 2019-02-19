import { Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent, useState } from 'react';
import { ILeaguePositions, ISummoner } from '../../shared/riot-api/typings';
import Matches from '../Matches';
import SummonerInfo from '../SummonerInfo';
import Trees from '../Trees';
import Trophies from '../Trophies';

interface ISummonerProps {
  summoner: ISummoner;
  region: string;
  summonerName: string;
  leaguePositions: ILeaguePositions;
  trophyHunter: any;
}

const useStyles = makeStyles({
  container: {
    background: '#000',
    backgroundImage: 'url(/static/backgrounds/dark-mosaic.png)',
    flex: 1
  },
  content: {
    maxWidth: 1000,
    padding: 20,
    margin: '0 auto'
  },
  tabContent: {
    marginTop: 20,
    textAlign: 'center'
  }
});

const Summoner: FunctionComponent<ISummonerProps> = ({
  region,
  summoner,
  leaguePositions,
  trophyHunter
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <SummonerInfo
            region={region}
            leaguePositions={leaguePositions}
            trophyHunter={trophyHunter}
            {...summoner}
          />
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Trees" />
            <Tab label="Trophies" />
            <Tab label="Matches" />
          </Tabs>
          <div className={classes.tabContent}>
            {value === 0 && (
              <Trees
                treeProgress={trophyHunter && trophyHunter.trees}
                customTree={trophyHunter ? trophyHunter.customTree : 'placeholder'}
              />
            )}
            {value === 1 && (
              <Trophies trophiesObtained={trophyHunter && trophyHunter.trophiesObtained} />
            )}
            {value === 2 && <Matches />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summoner;
