import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { rewards } from '../../../api/patreon';

class PatreonRewards extends PureComponent {
  render() {
    const { patreon } = this.props;

    return (
      <div>
        <h3>Rewards</h3>
        <p>
          Remove video ads, get a badge inside the app and get access to the Patron Discord roles
          for $1.00+ per month.
        </p>
        {rewards.map(reward => {
          const active = patreon && patreon[reward.name];
          return (
            <div key={reward.id}>
              {reward.label}
              <b> ({active ? 'active' : 'inactive'})</b>
            </div>
          );
        })}
      </div>
    );
  }
}

PatreonRewards.propTypes = {
  patreon: PropTypes.object
};

export default PatreonRewards;
