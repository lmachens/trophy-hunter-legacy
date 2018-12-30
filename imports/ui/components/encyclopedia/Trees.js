import { Avatar, List, ListItem, Subheader } from '../generic';
import React, { Component } from 'react';
import trees, { activeTrees, expiredTrees } from '../../../api/trees/trees';

import PropTypes from 'prop-types';
import Tree from '../_Tree';
import champions from '../../../api/riot-api/static/champions';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import universeTheme from '../../layouts/universeTheme';

const defaultValue = Object.keys(trees)[1];
const styles = {
  highlight: {
    color: universeTheme.palette.primary1Color
  },
  tree: {
    height: 260,
    width: 660,
    margin: '20px auto'
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
  title: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: 0
  },
  subtitle: {
    margin: 0
  },
  name: {
    marginLeft: 4
  }
};

export class TreesNavigation extends Component {
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
        <Subheader inset={true}>Active Trees</Subheader>
        {Object.values(activeTrees).map(tree => (
          <ListItem
            key={tree.name}
            leftAvatar={<Avatar src={getChampionSquare({ championId: tree.championId })} />}
            onClick={event => onChange(event, tree.name)}
            primaryText={tree.title}
            ref={value === tree.name ? element => (this.active = element) : null}
            style={value === tree.name ? styles.highlight : null}
          />
        ))}
        <Subheader inset={true}>Expired Trees</Subheader>
        {Object.values(expiredTrees).map(tree => (
          <ListItem
            key={tree.name}
            leftAvatar={<Avatar src={getChampionSquare({ championId: tree.championId })} />}
            onClick={event => onChange(event, tree.name)}
            primaryText={tree.title}
            ref={value === tree.name ? element => (this.active = element) : null}
            style={value === tree.name ? styles.highlight : null}
            value={tree.name}
          />
        ))}
      </List>
    );
  }
}

TreesNavigation.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export class Trees extends Component {
  render() {
    const { value = defaultValue } = this.props;
    const tree = trees[value];
    const champion = champions[tree.championId.toString()];
    const backgroundStyle = Object.assign(
      {
        backgroundImage: `url(//ddragon.leagueoflegends.com/cdn/img/champion/splash/${
          champion.key
        }_0.jpg)`,
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );
    return (
      <div>
        <div style={backgroundStyle} />
        <h2 style={styles.title}>
          <Avatar src={getChampionSquare({ championId: tree.championId })} />
          <span style={styles.name}>{champion.name}</span>
        </h2>
        <h3 style={styles.subtitle}>{tree.title}</h3>
        <Tree style={styles.tree} tree={tree} />
        <p>
          <i>Note: This page is under construction.</i>
        </p>
      </div>
    );
  }
}

Trees.propTypes = {
  value: PropTypes.string
};
