import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import Champion from 'components/Champion';
import CS from 'components/CS';
import Item from 'components/Item';
import KDA from 'components/KDA';
import Perk from 'components/Perk';
import Spell from 'components/Spell';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { IMatchWithTimeline } from 'shared/riot-api/typings';
import { Trophy } from 'shared/trophies';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';

interface MatchProps {
  match: IMatchWithTimeline;
  summonerName: string;
}

const useStyles = makeStyles({
  container: {
    padding: 12,
    marginBottom: 5
  },
  win: {
    color: 'green',
    backgroundColor: '#319fd945',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  },
  loss: {
    color: '#9C172A',
    backgroundColor: '#bb32313b',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  },
  champion: {
    margin: 10,
    width: 60,
    height: 60,
    border: '2px ridge #242323'
  },
  spell: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: '30%'
  },
  perk: {
    margin: 5,
    width: 30,
    height: 30
  },
  item: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: '30%'
  }
});

const Match: FunctionComponent<MatchProps> = ({ match, summonerName }) => {
  const classes = useStyles();
  const [extendedMatch, setExtendedMatch] = useState<any>(null);
  const [trophies, setTrophies] = useState<Trophy[]>([]);

  useEffect(() => {
    const extendedMatchResult = extendMatchResult({
      matchResult: match,
      summonerName
    });
    setExtendedMatch(extendedMatchResult);
    console.log(extendedMatchResult);
    const calculatedTrophies = calculateTrophies({ extendedMatchResult });
    setTrophies(calculatedTrophies);
  }, [match, summonerName]);

  if (!extendedMatch) {
    return null;
  }
  const { participant } = extendedMatch;

  return (
    <div className={classes.container}>
      <Grid
        container
        className={classNames(participant.stats.win ? classes.win : classes.loss)}
        spacing={24}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography color="inherit">{participant.stats.win ? 'Won' : 'Lost'}!</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Champion championId={participant.championId} className={classes.champion} />
            <div>
              <Spell spellId={participant.spell1Id} className={classes.spell} />
              <Spell spellId={participant.spell2Id} className={classes.spell} />
            </div>
            <div>
              <Perk perkId={participant.stats.perk0} className={classes.perk} />
              <Perk perkId={participant.stats.perkSubStyle} className={classes.perk} />
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <KDA
            assists={participant.stats.assists}
            deaths={participant.stats.deaths}
            kills={participant.stats.kills}
          />
        </Grid>
        <Grid item>
          <CS
            neutralMinionsKilled={participant.stats.neutralMinionsKilled}
            totalMinionsKilled={participant.stats.totalMinionsKilled}
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Item itemId={participant.stats.item0} className={classes.item} />
            <Item itemId={participant.stats.item1} className={classes.item} />
            <Item itemId={participant.stats.item2} className={classes.item} />
            <Item itemId={participant.stats.item3} className={classes.item} />
            <Item itemId={participant.stats.item4} className={classes.item} />
            <Item itemId={participant.stats.item5} className={classes.item} />
            <Item itemId={participant.stats.item6} className={classes.item} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Match;
