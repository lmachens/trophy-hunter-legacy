import React, { Fragment, PureComponent } from 'react';

import PolarAngleAxis from 'recharts/lib/polar/PolarAngleAxis';
import PolarGrid from 'recharts/lib/polar/PolarGrid';
import PropTypes from 'prop-types';
import Radar from 'recharts/lib/polar/Radar';
import RadarChart from 'recharts/lib/chart/RadarChart';
import { Typography } from '../../../generic';

const normalizeGold = gold => (gold / 20000) * 100;
const normalizeKills = kills => (kills / 10) * 100;
const normalizeDeaths = deaths => (deaths / 10) * 100;
const normalizeAssists = assists => (assists / 10) * 100;
const normalizeDamage = damage => (damage / 20000) * 100;

class MatchupPerformance extends PureComponent {
  render() {
    const { firstStats = {}, secondStats = {} } = this.props;
    return (
      <Fragment>
        <Typography variant="caption">Matchup Performance</Typography>
        <RadarChart
          data={[
            {
              subject: 'Gold',
              playerOne: normalizeGold(firstStats.goldEarned),
              playerTwo: normalizeGold(secondStats.goldEarned)
            },
            {
              subject: 'Kills',
              playerOne: normalizeKills(firstStats.kills),
              playerTwo: normalizeKills(secondStats.kills)
            },
            {
              subject: 'Assists',
              playerOne: normalizeAssists(firstStats.assists),
              playerTwo: normalizeAssists(secondStats.assists)
            },
            {
              subject: 'Deaths',
              playerOne: normalizeDeaths(firstStats.deaths),
              playerTwo: normalizeDeaths(secondStats.deaths)
            },
            {
              subject: 'Damage',
              playerOne: normalizeDamage(firstStats.totalDamageDealtToChampions),
              playerTwo: normalizeDamage(secondStats.totalDamageDealtToChampions)
            }
          ]}
          height={200}
          width={300}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#c4b998' }} />
          <Radar dataKey="playerOne" fill="#319fd9" fillOpacity={0.5} stroke="#319fd9" />
          <Radar dataKey="playerTwo" fill="#bb3231" fillOpacity={0.5} stroke="#bb3231" />
        </RadarChart>
      </Fragment>
    );
  }
}

MatchupPerformance.propTypes = {
  firstStats: PropTypes.object,
  secondStats: PropTypes.object
};

export { MatchupPerformance };
