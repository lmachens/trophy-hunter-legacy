import { Grid, withStyles } from '../../../generic';
import React, { PureComponent } from 'react';

import { CS } from './_CS';
import { Champion } from './_Champion';
import { Items } from './_Items';
import { KDA } from './_KDA';
import { Keystone } from './_Keystone';
import PropTypes from 'prop-types';
import { Spells } from './_Spells';
import { Winner } from './_Winner';
import classNames from 'classnames';

const styles = {
  container: {
    display: 'flex'
  },
  participant: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingRight: 4
  },
  win: {
    backgroundColor: '#319fd945',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  },
  loss: {
    backgroundColor: '#bb32313b',
    fontWeight: 'bold',
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000'
  },
  champion: {
    margin: 4
  },
  stats: {
    width: 192
  }
};

class Match extends PureComponent {
  render() {
    const {
      classes,
      firstTeamTarget,
      match: { participant1, participant2 }
    } = this.props;
    let first, second;
    if (firstTeamTarget.championId === participant1.championId) {
      first = participant1;
      second = participant2;
    } else {
      first = participant2;
      second = participant1;
    }
    return (
      <Grid container>
        <Grid
          className={classNames(classes.participant, first.stats.win ? classes.win : classes.loss)}
          item
          xs={6}
        >
          <Champion championId={first.championId} className={classes.champion} />
          <Spells spell1Id={first.spell1Id} spell2Id={first.spell2Id} />
          <Keystone keystoneId={first.stats.perk0} perkSubStyleId={first.stats.perkSubStyle} />

          <Grid container direction="column">
            <Grid className={classes.stats} container item justify="space-between">
              <Grid item>
                <Winner winner={first.stats.win} />
              </Grid>
              <Grid item>
                <KDA
                  assists={first.stats.assists}
                  deaths={first.stats.deaths}
                  kills={first.stats.kills}
                />
              </Grid>
              <Grid item>
                <CS
                  neutralMinionsKilled={first.stats.neutralMinionsKilled}
                  totalMinionsKilled={first.stats.totalMinionsKilled}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Items
                item0={first.stats.item0}
                item1={first.stats.item1}
                item2={first.stats.item2}
                item3={first.stats.item3}
                item4={first.stats.item4}
                item5={first.stats.item5}
                item6={first.stats.item6}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classNames(classes.participant, second.stats.win ? classes.win : classes.loss)}
          item
          xs={6}
        >
          <Champion championId={second.championId} className={classes.champion} />
          <Spells spell1Id={second.spell1Id} spell2Id={second.spell2Id} />
          <Keystone keystoneId={second.stats.perk0} perkSubStyleId={second.stats.perkSubStyle} />

          <Grid container direction="column">
            <Grid container item justify="space-between">
              <Grid item>
                <Winner winner={second.stats.win} />
              </Grid>
              <Grid item>
                <KDA
                  assists={second.stats.assists}
                  deaths={second.stats.deaths}
                  kills={second.stats.kills}
                />
              </Grid>
              <Grid item>
                <CS
                  neutralMinionsKilled={second.stats.neutralMinionsKilled}
                  totalMinionsKilled={second.stats.totalMinionsKilled}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Items
                item0={second.stats.item0}
                item1={second.stats.item1}
                item2={second.stats.item2}
                item3={second.stats.item3}
                item4={second.stats.item4}
                item5={second.stats.item5}
                item6={second.stats.item6}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Match.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  firstTeamTarget: PropTypes.object
};

const enhanced = withStyles(styles)(Match);

export { enhanced as Match };
