import React, { Fragment, PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Table } from '../../../generic/Table';
import { TableBody } from '../../../generic/TableBody';
import { TableCell } from '../../../generic/TableCell';
import { TableHead } from '../../../generic/TableHead';
import { TableRow } from '../../../generic/TableRow';
import classNames from 'classnames';

const styles = {
  row: {
    backgroundColor: '#11131885',
    height: 'initial'
  },
  cell: {
    textAlign: 'center',
    padding: 1
  },
  playerOne: {
    color: '#319fd9',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  },
  playerTwo: {
    color: '#e44342',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  }
};

class MatchupStats extends PureComponent {
  render() {
    const {
      classes,
      firstStats = {},
      secondStats = {},
      firstChampionName,
      secondChampionName
    } = this.props;
    return (
      <Fragment>
        <Typography variant="caption">Champion Stats</Typography>
        <Table padding="none">
          <TableHead>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Type</TableCell>
              <TableCell className={classes.cell}>{firstChampionName}</TableCell>
              <TableCell className={classes.cell}>{secondChampionName}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Win Rate</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {(firstStats.winrate * 100).toFixed(2)}%
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {(secondStats.winrate * 100).toFixed(2)}%
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Gold Earned</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.goldEarned.toFixed(0)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.goldEarned.toFixed(0)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Kills</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.kills.toFixed(2)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.kills.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Deaths</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.deaths.toFixed(2)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.deaths.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Assists</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.assists.toFixed(2)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.assists.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Damage Dealt</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.totalDamageDealtToChampions.toFixed(0)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.totalDamageDealtToChampions.toFixed(0)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Killing Spree</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.killingSprees.toFixed(2)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.killingSprees.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Minions Killed</TableCell>
              <TableCell className={classNames(classes.cell, classes.playerOne)}>
                {firstStats.minionsKilled.toFixed(2)}
              </TableCell>
              <TableCell className={classNames(classes.cell, classes.playerTwo)}>
                {secondStats.minionsKilled.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}

MatchupStats.propTypes = {
  classes: PropTypes.object.isRequired,
  firstStats: PropTypes.object,
  secondStats: PropTypes.object,
  firstChampionName: PropTypes.string,
  secondChampionName: PropTypes.string
};

const enhanced = withStyles(styles)(MatchupStats);
export { enhanced as MatchupStats };
