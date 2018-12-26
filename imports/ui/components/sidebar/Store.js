import React, { Component } from 'react';

import HoverableBorder from './HoverableBorder';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import universeTheme from '../../layouts/universeTheme';

class Store extends Component {
  render() {
    const { trophyPoints } = this.props;

    return (
      <Link to="/items">
        <HoverableBorder routes={['/items']} style={{ textAlign: 'center' }}>
          <span style={{ color: universeTheme.palette.secondaryTextColor, fontSize: '11px' }}>
            Store
          </span>
          <div style={{ color: universeTheme.palette.textColor }}>
            <span>
              {trophyPoints} TP
              <br />
            </span>
            Win <b>Riot Points</b> or unlock exclusive content!
          </div>
        </HoverableBorder>
      </Link>
    );
  }
}

Store.propTypes = {
  trophyPoints: PropTypes.number
};

const mapStateToProps = ({ account: { userId, trophyHunter = { trophyPoints: 0 } } }) => {
  return { userId, trophyPoints: trophyHunter.trophyPoints };
};

export default connect(mapStateToProps)(Store);
