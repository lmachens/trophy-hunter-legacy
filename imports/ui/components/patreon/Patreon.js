import React, { PureComponent } from 'react';

import { Button } from '../generic';
import HelpBox from '../help/HelpBox';
import { Meteor } from 'meteor/meteor';
import PatreonAccount from './PatreonAccount';
import PatreonRewards from './PatreonRewards';
import PropTypes from 'prop-types';
import TrophyHunters from '../../../api/trophy-hunters/trophyHunters';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  container: {
    textAlign: 'center'
  }
};

const { id } = Meteor.settings.public.patreon;
const redirectURL = `${Meteor.absoluteUrl()}patreon/redirect`;

class Patreon extends PureComponent {
  handleClick = () => {
    const { trophyHunter } = this.props;
    const patreon = trophyHunter && trophyHunter.items && trophyHunter.items.patreon;
    if (patreon) {
      Meteor.call('disconnectPatreon');
    } else {
      const loginURL = `https://www.patreon.com/oauth2/authorize?response_type=code&client_id=${id}&redirect_uri=${redirectURL}&state=${Meteor.userId()}`;
      window.open(loginURL);
    }
  };

  render() {
    const { trophyHunter } = this.props;
    const { patreon, patreonPurchased } = (trophyHunter && trophyHunter.items) || {};
    return (
      <div style={styles.container}>
        <HelpBox>
          Support this app and become a{' '}
          <a href="https://www.patreon.com/about" rel="noopener noreferrer" target="_blank">
            Patreon
          </a>
          ! It will help us to make this app even better.
        </HelpBox>
        <PatreonRewards patreon={patreon} />
        <div>
          <h3>1. Become a Patreon</h3>
          <a
            data-patreon-widget-type="become-patron-button"
            href="https://www.patreon.com/bePatron?u=9400097"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/images/become_a_patron_button.png" />
          </a>
        </div>
        <div>
          <h3>2. Connect Patron to your account{!patreonPurchased && ' and earn 500 TP'}</h3>
          <PatreonAccount patreon={patreon} />
          <Button
            disabled={!trophyHunter}
            label={patreon ? 'Disconnect' : 'Connect'}
            onClick={this.handleClick}
            primary={true}
          />
        </div>
      </div>
    );
  }
}

Patreon.propTypes = {
  trophyHunter: PropTypes.object
};

const PatreonContainer = withTracker(() => {
  const trophyHunter = TrophyHunters.findOne(
    {
      userId: Meteor.userId()
    },
    { fields: { 'items.patreon': 1, 'items.patreonPurchased': 1 } }
  );

  return {
    trophyHunter
  };
})(Patreon);

export default PatreonContainer;
