import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent, useState } from 'react';
import Matches from '../Matches';
import SummonerInfo from '../SummonerInfo';
import Trees from '../Trees';
import Trophies from '../Trophies';
import { ISummonerProps } from './typings';

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
  trophyHunter,
  lastMatches
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: any) => {
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
          <Tabs value={value} onChange={handleChange} centered>
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
            {value === 2 && <Matches matches={lastMatches} summonerName={summoner.name} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summoner;
