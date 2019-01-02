import React, { Component } from 'react';

import { Avatar } from '../generic';
import Items from '../Items';
import PropTypes from 'prop-types';
import Spells from '../Spells';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import universeTheme from '../../layouts/universeTheme';

const styles = {
  container: {
    position: 'relative',
    height: '70px',
    marginBottom: '10px',
    padding: '2px',
    cursor: 'pointer'
  },
  championSize: 50,
  champion: {
    position: 'absolute',
    top: '8px',
    left: 0
  },
  stats: {
    position: 'absolute',
    top: '2px',
    right: '4px',
    textAlign: 'right'
  },
  stat: {
    width: '80px',
    display: 'inline-block'
  },
  championName: {
    position: 'absolute',
    top: '2px',
    left: '60px'
  },
  summonerName: {
    position: 'absolute',
    top: '15px',
    left: '60px'
  },
  spells: {
    position: 'absolute',
    top: '37px',
    left: '60px'
  },
  items: {
    position: 'absolute',
    top: '37px',
    right: '0px'
  }
};

class TimelineParticipant extends Component {
  state = {
    hovered: false
  };

  static id = 0;

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleClick = event => {
    event.preventDefault();

    const { onParticipantSelect, participantId } = this.props;
    onParticipantSelect && onParticipantSelect(participantId);
  };

  render() {
    const { onParticipantSelect, participant, selected, stats, style } = this.props;

    const containerStyle = Object.assign(
      {
        border: `1px solid ${universeTheme.palette[selected ? 'primary1Color' : 'borderColor']}`,
        backgroundColor: this.state.hovered ? fade(universeTheme.palette.textColor, 0.1) : null
      },
      styles.container
    );

    return (
      <div
        onClick={onParticipantSelect && this.handleClick}
        onMouseEnter={onParticipantSelect && this.handleMouseEnter}
        onMouseLeave={onParticipantSelect && this.handleMouseLeave}
        style={Object.assign({}, containerStyle, style)}
      >
        {this.renderChampion()}
        {this.renderText()}
        <div style={styles.spells}>
          <Spells participant={participant} />
        </div>
        {this.renderStats()}
        {stats && (
          <div style={styles.items}>
            <Items stats={stats} />
          </div>
        )}
      </div>
    );
  }

  renderChampion() {
    const { champion } = this.props;
    const avatarSrc = champion ? getChampionSquare({ champion }) : '';

    return <Avatar size={styles.championSize} src={avatarSrc} style={styles.champion} />;
  }

  renderText() {
    const { champion, participantIdentity } = this.props;

    const summonerNameStyle = Object.assign(
      {
        color: universeTheme.palette.secondaryTextColor
      },
      styles.summonerName
    );

    return (
      <div>
        <span style={styles.championName}>{champion.name}</span>
        <span style={summonerNameStyle}>{participantIdentity.player.summonerName}</span>
      </div>
    );
  }

  renderStats() {
    const { stats } = this.props;
    if (!stats) {
      return;
    }
    const {
      champLevel,
      goldEarned,
      totalMinionsKilled,
      neutralMinionsKilled,
      wardsPlaced,
      kills,
      deaths,
      assists
    } = stats;

    return (
      <div style={styles.stats}>
        <span style={styles.stat}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{champLevel || 0}</span>{' '}
          Level
        </span>
        <span style={styles.stat}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>
            {totalMinionsKilled + neutralMinionsKilled || 0}
          </span>{' '}
          CS
        </span>
        <span style={styles.stat}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>
            {kills || 0}/{deaths || 0}/{assists || 0}
          </span>{' '}
          KDA
        </span>
        <br />
        <span style={styles.stat}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>
            {wardsPlaced || 0}
          </span>{' '}
          Wards
        </span>
        <span style={styles.stat}>
          <span style={{ color: universeTheme.palette.secondaryTextColor }}>{goldEarned || 0}</span>{' '}
          Gold
        </span>
      </div>
    );
  }
}

TimelineParticipant.propTypes = {
  champion: PropTypes.object,
  onParticipantSelect: PropTypes.func,
  participant: PropTypes.object,
  participantIdentity: PropTypes.object,
  participantId: PropTypes.number,
  selected: PropTypes.bool,
  stats: PropTypes.object,
  style: PropTypes.object
};

export default TimelineParticipant;
