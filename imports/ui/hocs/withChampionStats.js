import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChampionStatsIfNeeded } from '../../store/actions';
import isEqual from 'lodash.isequal';

export const withChampionStats = WrappedComponent => {
  class ChampionStats extends Component {
    UNSAFE_componentWillMount() {
      this.processChampionIdProps(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const oldValue =
        this.props.champion ||
        this.props.championId ||
        this.props.championIds ||
        this.props.participant ||
        this.props.participants ||
        this.props.gameSession ||
        this.props.team;
      const newValue =
        nextProps.champion ||
        nextProps.championId ||
        nextProps.championIds ||
        nextProps.participant ||
        nextProps.participants ||
        nextProps.gameSession ||
        nextProps.team;

      if (!isEqual(oldValue, newValue)) {
        this.processChampionIdProps(nextProps);
      }
    }

    processChampionIdProps({
      fetchChampionStatsIfNeeded,
      champion,
      championId,
      championIds,
      participant,
      participants,
      gameSession,
      team
    }) {
      let fetchChampionIds = [];
      if (champion) {
        fetchChampionIds = [champion.id];
      } else if (championId) {
        fetchChampionIds = [championId];
      } else if (championIds) {
        fetchChampionIds = championIds;
      } else if (participant) {
        fetchChampionIds = [participant.championId];
      } else if (participants) {
        fetchChampionIds = participants.map(participant => participant.championId);
      } else if (gameSession) {
        fetchChampionIds = gameSession.game.participants.map(participant => participant.championId);
      } else if (team) {
        fetchChampionIds = team.map(participant => participant.championId);
      }
      fetchChampionIds.forEach(championId => fetchChampionStatsIfNeeded(championId));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ChampionStats.propTypes = {
    championStatsByChampionId: PropTypes.object.isRequired,
    champion: PropTypes.object,
    championId: PropTypes.number,
    championIds: PropTypes.array,
    participant: PropTypes.object,
    participants: PropTypes.array,
    gameSession: PropTypes.object,
    team: PropTypes.array,
    fetchChampionStatsIfNeeded: PropTypes.func.isRequired
  };

  const mapStateToProps = ({ championStatsByChampionId }) => {
    return {
      championStatsByChampionId
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      fetchChampionStatsIfNeeded: bindActionCreators(fetchChampionStatsIfNeeded, dispatch)
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChampionStats);
};
