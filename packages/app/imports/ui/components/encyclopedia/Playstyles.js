import { List, ListItem } from '../generic';
import React, { Component } from 'react';

import Attribute from '../playstyle/Attribute';
import PlaystyleIcon from '../playstyle/PlaystyleIcon';
import PropTypes from 'prop-types';
import playstyles from '../../../api/playstyles/playstyles';
import universeTheme from '../../layouts/universeTheme';

const defaultValue = Object.keys(playstyles)[0];

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
  name: {
    marginLeft: 4
  },
  title: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: 0
  },
  primaryAttribute: {
    width: 80,
    height: 80,
    margin: 4
  },
  secondaryAttribute: {
    width: 50,
    height: 50,
    margin: 4
  }
};

export class PlaystylesNavigation extends Component {
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
        {Object.values(playstyles).map(playstyle => (
          <ListItem
            key={playstyle.name}
            leftAvatar={<PlaystyleIcon playstyle={playstyle} />}
            onClick={event => onChange(event, playstyle.name)}
            primaryText={playstyle.title}
            ref={value === playstyle.name ? element => (this.active = element) : null}
            style={value === playstyle.name ? styles.highlight : null}
          />
        ))}
      </List>
    );
  }
}

PlaystylesNavigation.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export class Playstyles extends Component {
  render() {
    const { value = defaultValue } = this.props;
    const playstyle = playstyles[value];

    const backgroundStyle = Object.assign(
      {
        backgroundImage:
          'url(//universe-meeps.leagueoflegends.com/v1/assets/images/factions/shadow-isles_splash.jpg)',
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );
    return (
      <div>
        <div style={backgroundStyle} />
        <h2 style={styles.title}>
          {playstyle && <PlaystyleIcon playstyle={playstyle} />}
          <span style={styles.name}>{playstyle.title}</span>
        </h2>
        <p>{playstyle.description}</p>
        <div>
          Primary Attribute
          <br />
          <Attribute attribute={playstyle.primaryAttribute} style={styles.primaryAttribute} />
        </div>
        <div>
          Secondary Attribute
          <br />
          {playstyle.secondaryAttributes.map(secondaryAttribute => (
            <Attribute
              attribute={secondaryAttribute}
              key={secondaryAttribute}
              style={styles.secondaryAttribute}
            />
          ))}
        </div>
      </div>
    );
  }
}

Playstyles.propTypes = {
  value: PropTypes.string
};
