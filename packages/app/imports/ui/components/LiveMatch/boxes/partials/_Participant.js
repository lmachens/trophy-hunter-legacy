import { IconButtonV2, Typography, withStyles } from '../../../generic';
import React, { PureComponent } from 'react';
import {
  fetchParticipantPerformanceIfNeeded,
  selectFirstTeamTarget,
  selectMapTarget,
  selectRole,
  selectSecondTeamTarget,
  fetchChampionStatsIfNeeded
} from '../../../../../store/actions';

import { Badges } from './_Badges';
import { Champion } from './_Champion';
import { DamageParticipant } from './_DamageParticipant';
import { Leagues } from './_Leagues';
import { Perks } from './_Perks';
import PropTypes from 'prop-types';
import { RoleMenu } from './_RoleMenu';
import { Tooltip } from '../../../generic/Tooltip';
import { VersusIcon } from '../../../icons';
import { WinRate } from './_WinRate';
import { bindActionCreators } from 'redux';
import champions from '/imports/shared/riot-api/champions.ts';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { generateBadgesByParticipantPerformance } from '../../../../../api/badges';
import { getMinimap } from '../../../../../api/riot-api/staticData';

const styles = theme => ({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  championName: {
    position: 'absolute',
    left: 60,
    top: 30
  },
  summonerName: {
    position: 'absolute',
    left: 60,
    top: 46
  },
  button: {
    width: 30,
    height: 30,
    padding: 0
  },
  roleImg: {
    width: 24,
    height: 24
  },
  champion: {
    position: 'absolute',
    left: 3,
    top: 'calc(50% - 20px)'
  },
  select: {
    position: 'absolute',
    right: 10,
    top: 0
  },
  toMap: {
    position: 'absolute',
    right: 10,
    top: 33
  },
  role: {
    position: 'absolute',
    right: 10,
    top: 66
  },
  toMapImage: {
    width: 20,
    height: 20
  },
  grayscale: {
    filter: 'brightness(.6) grayscale(100%)',
    transition: theme.transitions.create('filter'),
    '&:hover': {
      filter: 'none'
    }
  },
  grayscaleSelect: {
    filter: 'grayscale(100%) drop-shadow(0px 0px 1px #000)',
    transition: theme.transitions.create('filter'),
    '&:hover': {
      filter: 'none'
    }
  },
  team1Button: { color: '#30a0d9' },
  team2Button: { color: '#bb3232' },
  damage: {
    position: 'absolute',
    left: 2,
    bottom: 2,
    height: 10,
    width: 40
  },
  perks: {
    position: 'absolute',
    left: 60,
    bottom: 0
  },
  badges: {
    position: 'absolute',
    left: 60,
    top: 3
  },
  leagues: {
    position: 'absolute',
    left: 9,
    top: 1
  },
  winRate: {
    position: 'absolute',
    left: 0,
    bottom: 12,
    minWidth: 50,
    textAlign: 'center'
  },
  participantLevel: {
    position: 'absolute',
    left: 30,
    top: 30,
    zIndex: 1
  },
  levelTypography: {
    textShadow: '0 -1px #000000, 1px 0 #000000, 0 1px #000000, -1px 0 #000000',
    textAlign: 'center',
    fontSize: '1.1em',
    fontWeight: 'bold'
  }
});

class Participant extends PureComponent {
  state = {
    roleAnchorEl: null
  };

  componentDidMount() {
    const {
      fetchParticipantPerformanceIfNeeded,
      identifier,
      fetchChampionStatsIfNeeded,
      participant
    } = this.props;
    if (identifier) fetchParticipantPerformanceIfNeeded(identifier);
    if (participant.championId) fetchChampionStatsIfNeeded(participant.championId);
  }

  componentDidUpdate(prevProps) {
    const { fetchParticipantPerformanceIfNeeded, identifier, participant } = this.props;
    if (identifier !== prevProps.identifier && identifier) {
      fetchParticipantPerformanceIfNeeded(identifier);
    }
    if (participant.championId !== prevProps.championId)
      fetchChampionStatsIfNeeded(participant.championId);
  }

  handleMapTargetClick = () => {
    const { selectMapTarget, participant } = this.props;
    selectMapTarget(participant);
  };

  handleSelectClick = () => {
    const { selectFirstTeamTarget, selectSecondTeamTarget, participant, invertTeams } = this.props;
    if (invertTeams ? participant.teamId === 200 : participant.teamId === 100)
      selectFirstTeamTarget(participant);
    else selectSecondTeamTarget(participant);
  };

  handleRoleClick = event => {
    this.setState({ roleAnchorEl: event.currentTarget });
  };

  handleCloseRoleMenu = () => {
    this.setState({ roleAnchorEl: null });
  };

  handleSelectRole = role => {
    const { selectRole, participant } = this.props;
    selectRole(role, participant);
    this.handleCloseRoleMenu();
  };

  render() {
    const {
      classes,
      firstTeamTarget,
      secondTeamTarget,
      participant,
      mapId,
      mapTarget,
      leaguePositions = [],
      badges,
      stats,
      championMastery,
      summonerLevel,
      invertTeams
    } = this.props;
    const { roleAnchorEl } = this.state;

    return (
      <div className={classes.container}>
        <Leagues className={classes.leagues} leagues={leaguePositions} />
        <Typography className={classes.championName}>
          {champions[participant.championId].name}
        </Typography>
        <Typography className={classes.summonerName} color="secondary">
          {participant.summonerName}
        </Typography>
        <div className={classes.participantLevel}>
          {championMastery && (
            <Tooltip title={`Champion Level ${championMastery.championLevel}`}>
              <Typography className={classes.levelTypography}>
                {championMastery.championLevel}
              </Typography>
            </Tooltip>
          )}
          {summonerLevel && (
            <Tooltip title={`Summoner Level ${summonerLevel}`}>
              <Typography className={classes.levelTypography}>{summonerLevel}</Typography>
            </Tooltip>
          )}
        </div>
        <Champion championId={participant.championId} className={classes.champion} />
        <Badges className={classes.badges} participantBadges={badges} />
        <Tooltip title="Select for matchup">
          <IconButtonV2
            className={classNames(classes.button, classes.select, {
              [classes.grayscaleSelect]:
                (!firstTeamTarget || firstTeamTarget.participantId !== participant.participantId) &&
                (!secondTeamTarget || secondTeamTarget.participantId !== participant.participantId)
            })}
            onClick={this.handleSelectClick}
          >
            <VersusIcon
              className={classNames({
                [classes.team1Button]: invertTeams
                  ? participant.teamId === 200
                  : participant.teamId === 100,
                [classes.team2Button]: invertTeams
                  ? participant.teamId === 100
                  : participant.teamId === 200
              })}
            />
          </IconButtonV2>
        </Tooltip>
        <Tooltip title="Select map target">
          <IconButtonV2
            className={classNames(classes.button, classes.toMap, {
              [classes.grayscale]:
                !mapTarget || mapTarget.participantId !== participant.participantId
            })}
            onClick={this.handleMapTargetClick}
          >
            <img className={classes.toMapImage} src={getMinimap(mapId)} />
          </IconButtonV2>
        </Tooltip>
        <RoleMenu
          anchorEl={roleAnchorEl}
          championId={participant.championId}
          onClose={this.handleCloseRoleMenu}
          onSelect={this.handleSelectRole}
          selectedRole={participant.role}
        />
        <Tooltip title="Select Role">
          <IconButtonV2
            aria-controls="role-menu"
            aria-haspopup="true"
            aria-label={participant.role}
            className={classNames(classes.button, classes.role)}
            disabled={!participant.role}
            onClick={this.handleRoleClick}
          >
            <img
              className={classes.roleImg}
              src={`/images/${participant.role || 'MIDDLE'}_icon.png`}
            />
          </IconButtonV2>
        </Tooltip>

        <WinRate className={classes.winRate} stats={stats} />
        <DamageParticipant
          championId={participant.championId}
          className={classes.damage}
          role={participant.role}
        />
        <Perks className={classes.perks} perks={participant.perks} />
      </div>
    );
  }
}

Participant.propTypes = {
  classes: PropTypes.object.isRequired,
  participant: PropTypes.object.isRequired,
  mapId: PropTypes.number.isRequired,
  mapTarget: PropTypes.object,
  selectMapTarget: PropTypes.func.isRequired,
  firstTeamTarget: PropTypes.object,
  secondTeamTarget: PropTypes.object,
  selectFirstTeamTarget: PropTypes.func.isRequired,
  selectSecondTeamTarget: PropTypes.func.isRequired,
  fetchParticipantPerformanceIfNeeded: PropTypes.func.isRequired,
  leaguePositions: PropTypes.array.isRequired,
  stats: PropTypes.object.isRequired,
  badges: PropTypes.object.isRequired,
  platformId: PropTypes.string.isRequired,
  selectRole: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
  championMastery: PropTypes.object,
  summonerLevel: PropTypes.number,
  invertTeams: PropTypes.bool,
  fetchChampionStatsIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = (
  {
    participantsPerformanceByParticipant,
    liveMatch: {
      mapId,
      mapTarget,
      firstTeamTarget,
      secondTeamTarget,
      platformId,
      firstTeam,
      secondTeam,
      invertTeams
    },
    playedTogetherBySummonerNames
  },
  { participant }
) => {
  const identifier = `${platformId}&${participant.summonerId}&${participant.championId}`;
  const participantPerformance = participantsPerformanceByParticipant[identifier] || {};
  const leaguePositions = participantPerformance.leaguePositions || [];
  const stats = participantPerformance.stats || {};
  const championMastery = participantPerformance.championMastery;
  const summonerLevel = participantPerformance.summonerLevel;

  const participants = [...firstTeam, ...secondTeam];
  const summonerNames = participants.map(participant => participant.summonerName);
  const playedTogetherIdentifier = `${platformId}&${summonerNames.join('|th|')}`;
  const playedTogether = playedTogetherBySummonerNames[playedTogetherIdentifier] || {};
  const badges = generateBadgesByParticipantPerformance({
    participantPerformance,
    participant,
    participants,
    playedTogether: playedTogether.playedTogether
  });

  return {
    leaguePositions,
    mapId,
    mapTarget,
    firstTeamTarget,
    secondTeamTarget,
    platformId,
    stats,
    badges,
    identifier,
    playedTogetherIdentifier,
    championMastery,
    summonerLevel,
    invertTeams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectMapTarget: bindActionCreators(selectMapTarget, dispatch),
    selectFirstTeamTarget: bindActionCreators(selectFirstTeamTarget, dispatch),
    selectSecondTeamTarget: bindActionCreators(selectSecondTeamTarget, dispatch),
    fetchParticipantPerformanceIfNeeded: bindActionCreators(
      fetchParticipantPerformanceIfNeeded,
      dispatch
    ),
    selectRole: bindActionCreators(selectRole, dispatch),
    fetchChampionStatsIfNeeded: bindActionCreators(fetchChampionStatsIfNeeded, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Participant);
export { enhanced as Participant };
