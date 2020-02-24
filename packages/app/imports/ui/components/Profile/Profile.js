import AvatarWithStatus from '../AvatarWithStatus';
import HoverableBorder from '../HoverableBorder';
import { JoinClient } from 'meteor-publish-join';
import { Link } from 'react-router-dom';
import Notifications from '../Notifications';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getWinsLosses } from '../../../api/trophy-hunters/helpers';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const Profile = ({ trophyHunter }) => (
  <Link to="/">
    <HoverableBorder
      routes={['/', '/trees', '/trophies', '/matches', '/playstyle']}
      style={{
        height: '60px',
        alignItems: 'center',
        flexFlow: null
      }}
    >
      <AvatarWithStatus style={{ margin: 5 }} trophyHunter={trophyHunter} />
      <div style={{ flex: 1 }}>
        <span style={{ color: universeTheme.palette.secondaryTextColor }}>
          {trophyHunter ? trophyHunter.summonerName : 'New Trophy Hunter'}
        </span>
        <br />
        <span style={{ color: universeTheme.palette.textColor }}>
          {trophyHunter ? getWinsLosses(trophyHunter) : 'No stats available'}
        </span>
      </div>
      <Notifications />
    </HoverableBorder>
  </Link>
);

Profile.propTypes = {
  trophyHunter: PropTypes.object
};

const ProfileContainer = withTracker(({ trophyHunter }) => {
  if (trophyHunter && !trophyHunter.rank) {
    const trophyHuntersRanking = JoinClient.get('trophyHuntersRanking');
    if (trophyHuntersRanking) {
      const ownTrophyHunter = trophyHuntersRanking.find(th => th.userId === trophyHunter.userId);
      if (ownTrophyHunter) {
        trophyHunter.rank = ownTrophyHunter.rank;
      }
    }
  }

  return {
    trophyHunter
  };
})(Profile);

const mapStateToProps = ({ account: { userId, trophyHunter } }) => {
  return {
    userId,
    trophyHunter
  };
};

export default connect(mapStateToProps)(ProfileContainer);
