import { MenuItem, SelectField, TextField } from '../generic';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Trophy from '../Trophy';
import TrophyHunterName from '../TrophyHunterName';
import { connect } from 'react-redux';
import get from 'lodash.get';
import trophies from '/imports/shared/trophies/index.ts';
import TrophyHunterAutoComplete from '../TrophyHunterAutoComplete';

class ReferrerItem extends PureComponent {
  state = {
    category: 'trophyHunter',
    details: ''
  };

  handleCategoryChange = (event, index, value) => {
    this.setState({ category: value, details: '' }, this.setParentState);
  };

  handleDetailsChange = (event, value) => {
    this.setState({ details: value }, this.setParentState);
  };

  isValid = () => {
    const { category, details } = this.state;
    const { playedGame } = this.props;

    return category && category.trim() && details.trim() && playedGame;
  };

  setParentState = () => {
    const { category, details } = this.state;
    const { onChange } = this.props;

    const valid = this.isValid();
    onChange({ category, details }, valid);
  };

  render() {
    const { referrer, referrerUserId, referredUserIds = [], userId, playedGame } = this.props;
    const { category, details } = this.state;
    const activeCategory = get(referrer, 'category') || category;
    const activeDetails = get(referrer, 'details') || details;
    return (
      <div>
        How did you hear about us? Tell us and earn 500 TP!
        <br />
        You get 1000 TP for every referred friend if they played at least one match and entered your
        name in this form.
        <br /> In addition you can unlock:
        <br />
        <Trophy
          forceColors={true}
          iconStyle={{
            width: 20,
            height: 20
          }}
          trophy={trophies.referrer}
        />
        <div>
          <SelectField
            disabled={!!referrer}
            onChange={this.handleCategoryChange}
            value={activeCategory}
          >
            <MenuItem primaryText="Trophy Hunter" value={'trophyHunter'} />
            <MenuItem primaryText="Overwolf App Store" value={'store'} />
            <MenuItem primaryText="Twitch" value={'twitch'} />
            <MenuItem primaryText="Website" value={'website'} />
            <MenuItem primaryText="YouTube" value={'youTube'} />
            <MenuItem primaryText="Other" value={'other'} />
          </SelectField>
        </div>
        {activeCategory === 'trophyHunter' && (
          <TrophyHunterAutoComplete
            onChange={this.handleDetailsChange}
            userId={userId}
            value={referrerUserId}
          />
        )}
        {activeCategory !== 'trophyHunter' && (
          <TextField
            disabled={!!referrer}
            hintText="Give us more details"
            onChange={this.handleDetailsChange}
            value={activeDetails}
          />
        )}
        <p>
          Referred Trophy Hunters:
          <br />
          {referredUserIds.map(referredUserId => (
            <TrophyHunterName key={referredUserId} userId={referredUserId} />
          ))}
          {referredUserIds.length === 0 && 'No entries found'}
        </p>
        {!playedGame && (
          <p style={{ fontWeight: 'bold', color: 'red' }}>
            You have to play at least 1 match before you can add a referrer!
          </p>
        )}
      </div>
    );
  }
}

ReferrerItem.propTypes = {
  referrerUserId: PropTypes.string,
  referredUserIds: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  referrer: PropTypes.object,
  userId: PropTypes.string,
  playedGame: PropTypes.bool
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return {
    referrerUserId: get(trophyHunter, 'referrerUserId'),
    referredUserIds: get(trophyHunter, 'referredUserIds'),
    referrer: get(trophyHunter, 'items.referrer'),
    userId: get(trophyHunter, 'userId'),
    playedGame: !!get(trophyHunter, 'features.games')
  };
};

export default connect(mapStateToProps)(ReferrerItem);
