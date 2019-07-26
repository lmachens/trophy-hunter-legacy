import { Avatar, Refresh } from '../generic';
import React, { Component } from 'react';

import ChampionStats from './ChampionStats';
import MatchHistory from './MatchHistory';
import PropTypes from 'prop-types';
import RoleSelector from './RoleSelector';
import RunesOrder from './RunesOrder';
import { bindActionCreators } from 'redux';
import champions from '/imports/shared/riot-api/champions.ts';
import { connect } from 'react-redux';
import { fetchChampionStats } from '../../../store/actions';
import get from 'lodash.get';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import { getRole } from './helpers';
import isEqual from 'lodash.isequal';
import moment from 'moment';
import universeTheme from '../../layouts/universeTheme';
import { withChampionStats } from '../../hocs/withChampionStats';

const styles = {
  container: {
    textAlign: 'center',
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  background: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundSize: 'cover',
    width: '100%',
    height: 686,
    pointerEvents: 'none'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  header: {
    margin: '5px 0 0 0'
  },
  selectChampion: {},
  championImage: {
    verticalAlign: 'middle',
    margin: 4,
    border: '2px ridge #c4b998'
  },
  credits: {
    position: 'absolute',
    top: 55,
    right: 20
  },
  matchHistory: {
    position: 'absolute',
    top: 360,
    right: 20
  }
};

class ChampionGuide extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    this.updateState(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState({ championId, championStatsByChampionId }) {
    const champion = champions[championId];
    const championStats = get(championStatsByChampionId, `${championId}.stats`) || {};
    const mapStats = get(championStatsByChampionId, `${championId}.byMap`) || {};
    const championStatsState = championStatsByChampionId[championId];
    const role = getRole(championStats);
    this.setState({
      champion,
      championStats,
      mapStats,
      role,
      championStatsState
    });
  }

  handleRoleChange = (event, role) => {
    this.setState({
      role
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }

  handleRefreshClick = () => {
    const { fetchChampionStats, championId } = this.props;

    fetchChampionStats(championId);
  };

  render() {
    const { champion, championStats, role, mapStats, championStatsState } = this.state;
    const height = champion ? 610 : 180;

    const backgroundStyle = champion
      ? Object.assign(
          {
            backgroundImage: `url(//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_0.jpg)`,
            filter: universeTheme.boxBackground.filter,
            opacity: universeTheme.boxBackground.opacity
          },
          styles.background
        )
      : {};

    const { isFetching, lastUpdated, error } = championStatsState || {
      isFetching: true
    };
    return (
      <div style={Object.assign({}, styles.container, { height })}>
        <div style={backgroundStyle} />
        <div style={styles.foreground}>
          <h2 style={styles.header}>
            {champion && role && (
              <ChampionStats
                champion={champion}
                map={'SUMMONERS_RIFT'}
                mapStats={mapStats}
                role={role}
              />
            )}
            {champion && (
              <Avatar
                size={40}
                src={getChampionSquare({ champion })}
                style={styles.championImage}
              />
            )}
            {champion ? `${champion.name} - ${champion.title} Guide` : 'Champion Guide'}
          </h2>
          <RoleSelector
            name="role"
            onChange={this.handleRoleChange}
            selectableValues={Object.keys(championStats)}
            valueSelected={role}
          />
          {champion && role && <RunesOrder champion={champion} role={role} />}
          {!champion && <h3 style={styles.selectChampion}>Please select a champion in LoL</h3>}
          {champion && (
            <div style={styles.credits}>
              <small>Updated {lastUpdated && moment(lastUpdated).calendar()}</small>
              <Refresh
                error={error}
                isRefreshing={isFetching}
                lastUpdated={lastUpdated}
                onClick={!isFetching ? this.handleRefreshClick : null}
                size={24}
              />
            </div>
          )}
          {champion && <MatchHistory championId={champion.id} style={styles.matchHistory} />}
        </div>
      </div>
    );
  }
}

ChampionGuide.propTypes = {
  championId: PropTypes.number.isRequired,
  championStatsByChampionId: PropTypes.object.isRequired,
  fetchChampionStats: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChampionStats: bindActionCreators(fetchChampionStats, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withChampionStats(ChampionGuide));
