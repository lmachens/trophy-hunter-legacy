import { List, ListItem } from '../generic';
import React, { Component } from 'react';

import Attribute from '../playstyle/Attribute';
import PropTypes from 'prop-types';
import Trophy from '../Trophy';
import attributes from '../../../api/attributes/attributes';
import trophies from '/imports/shared/trophies/index.ts';
import universeTheme from '../../layouts/universeTheme';

const defaultValue = Object.keys(attributes)[0];

const styles = {
  highlight: {
    color: universeTheme.palette.primary1Color
  },
  attribute: {
    width: 40,
    height: 40
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
  }
};

export class AttributesNavigation extends Component {
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
        {Object.values(attributes).map(attribute => (
          <ListItem
            key={attribute.name}
            leftAvatar={<Attribute attribute={attribute.name} style={styles.attribute} />}
            onClick={event => onChange(event, attribute.name)}
            primaryText={attribute.title}
            ref={value === attribute.name ? element => (this.active = element) : null}
            style={value === attribute.name ? styles.highlight : null}
          />
        ))}
      </List>
    );
  }
}

AttributesNavigation.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export class Attributes extends Component {
  render() {
    const { value = defaultValue } = this.props;
    const attribute = attributes[value];

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
          {attribute && <Attribute attribute={attribute.name} style={styles.attribute} />}
          <span style={styles.name}>{attribute && attribute.title}</span>
        </h2>
        <p>{attribute && attribute.description}</p>
        <div>
          Trophies with this attribute:
          <br />
          {Object.values(trophies)
            .filter(trophy => trophy.attribute === attribute.name)
            .map(trophy => (
              <Trophy forceColors={true} key={trophy.name} trophy={trophy} />
            ))}
        </div>
      </div>
    );
  }
}

Attributes.propTypes = {
  value: PropTypes.string
};
