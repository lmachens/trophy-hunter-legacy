import { List, ListItem } from '../generic';
import React, { Component } from 'react';
import Trophy from '../Trophy';

import Attribute from '../playstyle/Attribute';
import Perk from '../Perk';
import PropTypes from 'prop-types';
import TrophyStats from '../TrophyStats';
import { trophies } from '/imports/shared/trophies/trophies.ts';
import universeTheme from '../../layouts/universeTheme';
import { defs } from '/imports/shared/trophies/scores.ts';

const defaultValue = Object.values(trophies)[0].name;

const styles = {
  highlight: {
    color: universeTheme.palette.primary1Color
  },
  background: {
    position: 'fixed',
    left: 0,
    top: 30,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  image: {
    width: 240
  },
  name: {
    marginLeft: 4
  }
};

export class TrophiesNavigation extends Component {
  componentDidMount() {
    if (this.active && this.active.button) {
      // This has to be async, otherwise it will not work.
      setTimeout(() => {
        this.active &&
          this.active.button.button.scrollIntoView({
            behavior: 'instant',
            block: 'center',
            inline: 'center'
          });
      }, 0);
    }
  }

  render() {
    const { onChange, value = defaultValue } = this.props;
    return (
      <List>
        {Object.values(trophies).map(trophy => (
          <ListItem
            key={trophy.name}
            leftAvatar={<Trophy forceColors={true} trophy={trophy} />}
            onClick={event => onChange(event, trophy.name)}
            primaryText={trophy.title}
            ref={value === trophy.name ? element => (this.active = element) : null}
            style={value === trophy.name ? styles.highlight : null}
          />
        ))}
      </List>
    );
  }
}

TrophiesNavigation.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export class Trophies extends Component {
  render() {
    const { value = defaultValue } = this.props;
    const trophy = trophies[value];
    const backgroundStyle = Object.assign(
      {
        backgroundImage:
          'url(//universe-meeps.leagueoflegends.com/v1/assets/images/factions/shadow-isles_splash.jpg)',
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );
    const { gradient, label } = defs[trophy.score];
    const color = gradient && gradient[0];
    return (
      <div>
        <div style={backgroundStyle} />
        <h2 style={styles.title}>
          <Trophy forceColors={true} trophy={trophy} />
          <span style={styles.name}>{trophy.title}</span>
        </h2>
        <h3 style={styles.subtitle}>{trophy.description}</h3>
        {trophy.runeId && (
          <div>
            <Perk perkId={trophy.runeId} />
          </div>
        )}
        {trophy.imageData && <img src={trophy.imageData} style={styles.image} />}
        <p>
          Difficulty: <span style={{ color }}>{label}</span>
        </p>
        <p>
          {trophy.score} TP/LP
          <br />
        </p>
        {trophy.attribute && <Attribute attribute={trophy.attribute} />}
        <br />
        <TrophyStats trophy={trophy} />
        <p>
          <i>Note: This page is under construction.</i>
        </p>
      </div>
    );
  }
}

Trophies.propTypes = {
  value: PropTypes.string
};
