import React, { Component } from 'react';
import { avatarUrl, getProfileIcon, getLeagueImage } from '../../../api/riot-api/staticData';

import { Avatar } from '../generic';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import moment from 'moment';
import universeTheme from '../../layouts/universeTheme';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  container: {
    position: 'relative'
  },
  profileIcon: {
    border: '2px ridge #c4b998'
  },
  status: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    border: '1px outset black',
    borderRadius: '50%',
    pointerEvents: 'none'
  },
  imageContainer: {
    height: 50,
    verticalAlign: 'bottom',
    width: 80,
    position: 'relative'
  },
  leagueImage: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    width: 50
  }
};

class AvatarWithStatus extends Component {
  static id = 0;
  state = {
    imageError: false
  };

  handleImageError = () => {
    this.setState({
      imageError: true
    });
  };

  render() {
    const { hideStatus, size, style } = this.props;
    let { trophyHunter } = this.props;
    const { imageError } = this.state;
    if (!trophyHunter) {
      trophyHunter = {
        summonerName: 'New Trophy Hunter',
        status: 'offline',
        profileIconId: 588,
        items: {},
        region: 'EUW'
      };
    }
    const status = trophyHunter.status;
    const profileIconId = trophyHunter.profileIconId;

    const statusStyle = Object.assign(
      {
        backgroundColor: universeTheme.palette[`${status}Color`],
        height: parseInt(size / 3) || 16,
        width: parseInt(size / 3) || 16
      },
      styles.status
    );

    const containerStyle = Object.assign({}, styles.container, style);

    const customStyle = {};
    if (trophyHunter.items.avatar) {
      customStyle.borderRadius = trophyHunter.items.avatar.borderRadius;
      customStyle.borderColor = trophyHunter.items.avatar.borderColor;
    }
    const avatarStyle = Object.assign({}, styles.profileIcon, customStyle);
    return (
      <div>
        <Tooltip
          title={
            <TooltipTitle
              content={this.renderTooltipContent()}
              title={trophyHunter ? trophyHunter.summonerName : 'Unknown'}
            />
          }
        >
          <div style={containerStyle}>
            <Avatar
              onError={this.handleImageError}
              size={size || 50}
              src={
                imageError
                  ? avatarUrl(trophyHunter.region, trophyHunter.summonerName)
                  : getProfileIcon(`${profileIconId}.png`)
              }
              style={avatarStyle}
            />
            {!hideStatus && status !== 'offline' && <div style={statusStyle} />}
          </div>
        </Tooltip>
      </div>
    );
  }

  renderTooltipContent = () => {
    const { trophyHunter } = this.props;

    if (!trophyHunter) return null;
    return (
      <div>
        <span>Status: </span>
        <span style={{ color: universeTheme.palette[`${trophyHunter.status}Color`] }}>
          {trophyHunter.status}
        </span>
        <br />
        {trophyHunter.seasonRank ? `${trophyHunter.seasonRank}. Rank` : 'Unranked'}{' '}
        {trophyHunter.rank && `(${trophyHunter.rank}. All-Time)`}
        <br />
        {trophyHunter.lastLogin && `Last Login ${moment(trophyHunter.lastLogin).calendar()}`}
        <br />
        Summoner level {trophyHunter.summonerLevel}
        {trophyHunter.leaguePositions && (
          <div style={{ display: 'flex' }}>
            {this.renderLeaguePosition('RANKED_FLEX_TT')}
            {this.renderLeaguePosition('RANKED_SOLO_5x5')}
            {this.renderLeaguePosition('RANKED_FLEX_SR')}
          </div>
        )}
      </div>
    );
  };

  renderLeaguePosition = queueType => {
    const { leaguePositions } = this.props.trophyHunter;

    const leaguePosition = leaguePositions.find(position => position.queueType === queueType) || {
      tier: 'PROVISIONAL',
      rank: ''
    };

    let title = '';
    if (queueType === 'RANKED_SOLO_5x5') {
      title = 'Solo/Duo';
    } else if (queueType === 'RANKED_FLEX_SR') {
      title = 'Flex 5v5';
    } else if (queueType === 'RANKED_FLEX_TT') {
      title = 'Flex 3v3';
    }

    return (
      <div style={{ margin: 5 }}>
        <div style={styles.imageContainer}>
          <img src={getLeagueImage(leaguePosition)} style={styles.leagueImage} />
        </div>
        <div style={{ marginTop: 5 }}>
          {title}
          <br />
          {leaguePosition.tier}
          {leaguePosition.rank && <span> {leaguePosition.rank}</span>}
          <br />
        </div>
      </div>
    );
  };
}

AvatarWithStatus.propTypes = {
  hideStatus: PropTypes.bool,
  trophyHunter: PropTypes.object,
  size: PropTypes.number,
  style: PropTypes.object
};

export default AvatarWithStatus;
