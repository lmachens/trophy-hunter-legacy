import { withStyles, Typography } from '../generic';
import React, { PureComponent, Fragment } from 'react';

import PropTypes from 'prop-types';
import { summonersRift } from '../../../api/summoner-stats/definitions';
import { Paper } from '../generic/Paper';
import { Table } from '../generic/Table';
import { TableHead } from '../generic/TableHead';
import { TableCell } from '../generic/TableCell';
import { TableRow } from '../generic/TableRow';
import { TableBody } from '../generic/TableBody';

const styles = {};

const categories = {
  earliest: 'Earliest',
  maximum: 'Maximum',
  streaks: 'Streaks'
};

class SummonerStats extends PureComponent {
  render() {
    const { classes, summonerStats = {} } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="headline">Summoners Rift</Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            {Object.entries(categories).map(([key, title]) => (
              <Fragment key={key}>
                <TableHead>
                  <TableRow>
                    <TableCell>{title}</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Match</TableCell>
                    <TableCell>Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(summonersRift[key]).map(summonerStatistic => (
                    <TableRow key={summonerStatistic.name}>
                      <TableCell>{summonerStatistic.title}</TableCell>
                      <TableCell>{summonerStats[summonerStatistic.name] || 0}</TableCell>
                      <TableCell>Link to match</TableCell>
                      <TableCell>Yesterday</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Fragment>
            ))}
          </Table>
        </Paper>
      </div>
    );
  }
}

SummonerStats.propTypes = {
  classes: PropTypes.object.isRequired,
  summonerStats: PropTypes.object
};

const enhance = withStyles(styles)(SummonerStats);

export { enhance as SummonerStats };
